import { Router, Express } from "express";
import { InventoryModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const DeleteProcessRouter = Router();

//ProcessId

DeleteProcessRouter.delete("/DeleteProcess", (req, res, next) => {
       
        mongoose.connect(ConnString).then(()=>{
            WorkerModel.find({
              WorkerId: req.query.WorkerId,
              Owner: "yes",
            }).then((data) => {
              data.length > 1 ? next() : res.send(404);
            });
   

        })


  
});
DeleteProcessRouter.use((req, res, next) =>{

     mongoose.connect(ConnString).then(() => {
       ProcessModel.findByIdAndDelete(req.query.ProcessId).then((then) =>
         res.send(200)
       );
     });

})

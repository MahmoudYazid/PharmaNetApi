import { Express, Router, Request, Response } from "express";
import { DrugsModel, PharmacyModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const AddDrugRouter = Router();
///AddDrugToDb?DrugName=
AddDrugRouter.post("/AddDrugToDb", (req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    DrugsModel.find({
      DrugName: req.query.DrugName,
      
    }).then((data) => {
        
      if (data.length <= 0) {
        
        next();
      } else {
        res.send(404);
      }
    });
  });
});

AddDrugRouter.use((req,res,next)=>{
     mongoose.connect(ConnString).then(()=>{
         const AddNewDrugToDb = new DrugsModel({
           DrugName: req.query.DrugName,
         });
         AddNewDrugToDb.save();
         res.send("drug added");

     })
   
})


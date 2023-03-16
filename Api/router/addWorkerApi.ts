import { Router } from "express";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";
import {AccountModel, WorkerModel } from "../model/model";
///AddAccount?Name=&phone=&password=
export const AddWorkerRouter = Router();
AddWorkerRouter.post("/AddWorker", (req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    WorkerModel.find({
      PharmacyId: req.query.PharmacyId,
      WorkerId: req.query.WorkerId,
    }).then((data) => {
      data.length <= 0 ? next() : res.send(404);
    });
  });
});

AddWorkerRouter.use((req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    AccountModel.find({_id:req.query.WorkerId}).then((data)=>{
      data.map((ExtractedData)=>{
        res.locals.username=ExtractedData.UseName
        next();

      })
      
    })
  });
});


AddWorkerRouter.use((req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    const NewAccount = new WorkerModel({
      PharmacyId: req.query.PharmacyId,
      WorkerId: req.query.WorkerId,
      PharmacyName: req.query.PharmacyName,
      Owner:"no",
      username:res.locals.username
    });
    NewAccount.save();
    res.send(200);
  });
});

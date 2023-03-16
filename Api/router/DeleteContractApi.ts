import { Router, Express } from "express";
import { InventoryModel, PharmacyModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const DelteContractRouter = Router();

//ProcessId,WorkerId
DelteContractRouter.delete("/DeleteContract", (req, res, next) => {
PharmacyModel.find({ OwnerId: req.query.WorkerId}).then((data)=>{
  data.length>0?next():res.send(400)
});
});
DelteContractRouter.delete("/DeleteContract", (req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    WorkerModel.findByIdAndDelete(req.query.ContractId).then((then) =>
      res.send(200)
    );
  });
});

import { Router, Express } from "express";
import { InventoryModel, PharmacyModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetTheOwnerRouter = Router();

//ProcessId
GetTheOwnerRouter.get("/GetTheOwner", (req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    PharmacyModel.find({
      PharmacyName: req.query.PharmacyName,
    }).then((data) => 
    res.json(data));
  });
});

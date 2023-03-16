import { Router, Express } from "express";
import { InventoryModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetProcessesOfPharmacyRouter = Router();

//ProcessId
GetProcessesOfPharmacyRouter.get(
  "/GetProcessesOfPharmacy",
  (req, res, next) => {
    
    mongoose.connect(ConnString).then(() => {
      ProcessModel.find({
        PharmacyId: req.query.PharmacyId,
      }).then((data) => res.json(data));
    });
  }
);

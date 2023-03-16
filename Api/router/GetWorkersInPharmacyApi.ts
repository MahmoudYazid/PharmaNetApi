import { Router, Express } from "express";
import {
  InventoryModel,
  PharmacyModel,
  ProcessModel,
  WorkerModel,
} from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetWorkersInPharmacyRouter = Router();

//ProcessId
GetWorkersInPharmacyRouter.get(
  "/GetWorkersInPharmacy",
  (req, res, next) => {
    mongoose.connect(ConnString).then(() => {
      WorkerModel.find({
        PharmacyId: req.query.PharmacyId,
      }).then((data) => res.json(data));
    });
  }
);

import { Router, Express } from "express";
import {
    AccountModel,
  InventoryModel,
  PharmacyModel,
  ProcessModel,
  WorkerModel,
} from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetWorkerNameByIdRouter = Router();

//ProcessId
GetWorkerNameByIdRouter.get("/GetWorkerNameById", (req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    AccountModel.find({
      _id: req.query.WorkerId,
    }).then((data) => res.json(data));
  });
});

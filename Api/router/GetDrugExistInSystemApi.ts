import { Router, Express } from "express";
import { DrugsModel, InventoryModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetDrugExistInSystemRouter = Router();


GetDrugExistInSystemRouter.get("/GetDrugExistInSystem", (req, res, next) => {

  mongoose.connect(ConnString).then(() => {
    DrugsModel.find({}).then((data) => res.json(data));
  });
});

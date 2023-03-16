import { Router, Express } from "express";
import {
  DrugsModel,
  InventoryModel,
  ProcessModel,
  WorkerModel,
} from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetAllPharmaciesThatWorkInApiRouter = Router();

GetAllPharmaciesThatWorkInApiRouter.get(
  
  "/GetAllPharmaciesThatWorkIn",
  (req, res, next) => {
      

    mongoose.connect(ConnString).then(() => {
      WorkerModel.find({
        WorkerId: req.query.WorkerId,
      }).then((data) => res.json(data));
    });
  }
);

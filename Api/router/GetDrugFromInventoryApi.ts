import { Router, Express } from "express";
import { InventoryModel, ProcessModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const GetDrugFromInventoryRouter = Router();

//ProcessId
GetDrugFromInventoryRouter.get("/GetDrugFromInventory", (req, res, next) => {
 
  mongoose.connect(ConnString).then(() => {

    InventoryModel.find({
        PharmacyId:req.query.PharmacyId

    }).then((data) =>
        res.json(data)

      
    );
  });
});


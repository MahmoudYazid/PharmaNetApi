import { Router, Express } from "express";
import { InventoryModel, ProcessModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const SellDrugRouter = Router();

// DrugName , WorkerId , PharmacyId, Quantity
SellDrugRouter.post("/SellDrug", (req, res, next) => {
    next();
});

SellDrugRouter.use((req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    InventoryModel.find({
      DrugName: req.query.DrugName,
      PharmacyId: req.query.PharmacyId,
    }).then((data) => {
      if (data.length > 0) {
        data.map((extracteddata) => {
          const NewQuantity =
            Number(extracteddata.Quantity)-Number(req.query.Quantity) ;
            if (NewQuantity>=0){
                const NewProcess = new ProcessModel({
                  PharmacyId: req.query.PharmacyId,
                  WorkerId: req.query.WorkerId,
                  quantity: req.query.Quantity,
                  DrugName: req.query.DrugName,
                  TypeOfProcess: "sell",
                });
                NewProcess.save();
                
          InventoryModel.findByIdAndUpdate(extracteddata._id, {
            DrugName: req.query.DrugName,
            PharmacyId: req.query.PharmacyId,

            Quantity: String(NewQuantity),
          }).then(() => res.send(200));

            }else{

                res.sendStatus(404)
            }

        });
      } else {
        res.sendStatus(400);
      }
    });
  });
});

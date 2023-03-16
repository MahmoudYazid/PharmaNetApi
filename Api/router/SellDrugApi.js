"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellDrugRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.SellDrugRouter = (0, express_1.Router)();
// DrugName , WorkerId , PharmacyId, Quantity
exports.SellDrugRouter.post("/SellDrug", (req, res, next) => {
    next();
});
exports.SellDrugRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.InventoryModel.find({
            DrugName: req.query.DrugName,
            PharmacyId: req.query.PharmacyId,
        }).then((data) => {
            if (data.length > 0) {
                data.map((extracteddata) => {
                    const NewQuantity = Number(extracteddata.Quantity) - Number(req.query.Quantity);
                    if (NewQuantity >= 0) {
                        const NewProcess = new model_1.ProcessModel({
                            PharmacyId: req.query.PharmacyId,
                            WorkerId: req.query.WorkerId,
                            quantity: req.query.Quantity,
                            DrugName: req.query.DrugName,
                            TypeOfProcess: "sell",
                        });
                        NewProcess.save();
                        model_1.InventoryModel.findByIdAndUpdate(extracteddata._id, {
                            DrugName: req.query.DrugName,
                            PharmacyId: req.query.PharmacyId,
                            Quantity: String(NewQuantity),
                        }).then(() => res.send(200));
                    }
                    else {
                        res.sendStatus(404);
                    }
                });
            }
            else {
                res.sendStatus(400);
            }
        });
    });
});

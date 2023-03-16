"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDrugRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.AddDrugRouter = (0, express_1.Router)();
///AddDrugToDb?DrugName=
exports.AddDrugRouter.post("/AddDrugToDb", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.DrugsModel.find({
            DrugName: req.query.DrugName,
        }).then((data) => {
            if (data.length <= 0) {
                next();
            }
            else {
                res.send(404);
            }
        });
    });
});
exports.AddDrugRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        const AddNewDrugToDb = new model_1.DrugsModel({
            DrugName: req.query.DrugName,
        });
        AddNewDrugToDb.save();
        res.send("drug added");
    });
});

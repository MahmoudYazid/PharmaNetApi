"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkerRouter = void 0;
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
const model_1 = require("../model/model");
///AddAccount?Name=&phone=&password=
exports.AddWorkerRouter = (0, express_1.Router)();
exports.AddWorkerRouter.post("/AddWorker", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.WorkerModel.find({
            PharmacyId: req.query.PharmacyId,
            WorkerId: req.query.WorkerId,
        }).then((data) => {
            data.length <= 0 ? next() : res.send(404);
        });
    });
});
exports.AddWorkerRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.AccountModel.find({ _id: req.query.WorkerId }).then((data) => {
            data.map((ExtractedData) => {
                res.locals.username = ExtractedData.UseName;
                next();
            });
        });
    });
});
exports.AddWorkerRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        const NewAccount = new model_1.WorkerModel({
            PharmacyId: req.query.PharmacyId,
            WorkerId: req.query.WorkerId,
            PharmacyName: req.query.PharmacyName,
            Owner: "no",
            username: res.locals.username
        });
        NewAccount.save();
        res.send(200);
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelteContractRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.DelteContractRouter = (0, express_1.Router)();
//ProcessId,WorkerId
exports.DelteContractRouter.delete("/DeleteContract", (req, res, next) => {
    model_1.PharmacyModel.find({ OwnerId: req.query.WorkerId }).then((data) => {
        data.length > 0 ? next() : res.send(400);
    });
});
exports.DelteContractRouter.delete("/DeleteContract", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.WorkerModel.findByIdAndDelete(req.query.ContractId).then((then) => res.send(200));
    });
});

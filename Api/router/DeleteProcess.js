"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProcessRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.DeleteProcessRouter = (0, express_1.Router)();
//ProcessId
exports.DeleteProcessRouter.delete("/DeleteProcess", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.WorkerModel.find({
            WorkerId: req.query.WorkerId,
            Owner: "yes",
        }).then((data) => {
            data.length > 1 ? next() : res.send(404);
        });
    });
});
exports.DeleteProcessRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.ProcessModel.findByIdAndDelete(req.query.ProcessId).then((then) => res.send(200));
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccountRouter = void 0;
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
const model_1 = require("../model/model");
///AddAccount?Name=&phone=&password=
exports.AddAccountRouter = (0, express_1.Router)();
exports.AddAccountRouter.post("/AddAccount", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.AccountModel.find({
            UseName: req.query.Name,
            Phone: req.query.phone,
            password: req.query.password
        }).then((data) => {
            data.length <= 0 ? next() : res.send(404);
        });
    });
});
exports.AddAccountRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        const NewAccount = new model_1.AccountModel({
            UseName: req.query.Name,
            Phone: req.query.phone,
            password: req.query.password,
        });
        NewAccount.save();
        res.send(200);
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.LoginRouter = (0, express_1.Router)();
///Login?UserName=&Password=
exports.LoginRouter.get("/Login", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.AccountModel.find({
            UseName: req.query.UserName,
            password: req.query.Password,
        }).then((data) => {
            if (data.length > 0) {
                data.map((ExtractedData) => {
                    res.locals.UserId = ExtractedData._id;
                    next();
                });
            }
            else {
                res.sendStatus(404);
            }
        });
    });
});
exports.LoginRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.WorkerModel.find({
            WorkerId: res.locals.UserId,
        }).then((data) => {
            if (data.length > 0) {
                res.json(data);
            }
            else {
                res.json([{ WorkerId: res.locals.UserId }]);
            }
        });
    });
});

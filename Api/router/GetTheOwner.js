"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTheOwnerRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.GetTheOwnerRouter = (0, express_1.Router)();
//ProcessId
exports.GetTheOwnerRouter.get("/GetTheOwner", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.PharmacyModel.find({
            PharmacyName: req.query.PharmacyName,
        }).then((data) => res.json(data));
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPharmacyRouter = void 0;
const express_1 = require("express");
const model_1 = require("../model/model");
const mongoose_1 = __importDefault(require("mongoose"));
const connectionstring_1 = require("../model/connectionstring");
exports.AddPharmacyRouter = (0, express_1.Router)();
///addpharmacy?PharmacyName=&OwnerId=
exports.AddPharmacyRouter.post("/addpharmacy", (req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.PharmacyModel.find({
            PharmacyName: req.query.PharmacyName,
            OwnerId: req.query.OwnerId,
        }).then((data) => {
            if (data.length === 0) {
                next();
            }
            else {
                res.sendStatus(404);
            }
        });
    });
});
exports.AddPharmacyRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        const AddNewData = new model_1.PharmacyModel({
            PharmacyName: req.query.PharmacyName,
            OwnerId: req.query.OwnerId,
        });
        AddNewData.save();
        next();
    });
});
exports.AddPharmacyRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.PharmacyModel.find({ PharmacyName: req.query.PharmacyName }).then((data) => {
            data.map((ExtractedData) => {
                res.locals.PharmacyId = ExtractedData._id;
                next();
            });
        });
    });
});
exports.AddPharmacyRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        model_1.AccountModel.find({ _id: req.query.OwnerId }).then((data) => {
            data.map((extdata) => {
                res.locals.username = extdata.UseName;
                next();
            });
        });
    });
});
exports.AddPharmacyRouter.use((req, res, next) => {
    mongoose_1.default.connect(connectionstring_1.ConnString).then(() => {
        const AddNewData = new model_1.WorkerModel({
            PharmacyName: req.query.PharmacyName,
            Owner: "yes",
            WorkerId: req.query.OwnerId,
            PharmacyId: res.locals.PharmacyId,
            username: res.locals.username
        });
        AddNewData.save();
        res.sendStatus(200);
    });
});

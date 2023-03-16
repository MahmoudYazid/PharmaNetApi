"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchima = exports.InVentorySchima = exports.processSchima = exports.WorkerSchima = exports.DrugsSchima = exports.PharmacySchima = void 0;
const mongoose_1 = require("mongoose");
exports.PharmacySchima = new mongoose_1.Schema({
    PharmacyName: String,
    OwnerId: String
});
exports.DrugsSchima = new mongoose_1.Schema({
    DrugName: String
});
exports.WorkerSchima = new mongoose_1.Schema({
    PharmacyId: String,
    PharmacyName: String,
    WorkerId: String,
    Owner: String,
    username: String
});
exports.processSchima = new mongoose_1.Schema({
    PharmacyId: String,
    WorkerId: String,
    DrugName: String,
    TypeOfProcess: String,
    quantity: String
});
exports.InVentorySchima = new mongoose_1.Schema({
    DrugName: String,
    PharmacyId: String,
    Quantity: String,
});
exports.AccountSchima = new mongoose_1.Schema({
    UseName: String,
    Phone: String,
    password: String
});

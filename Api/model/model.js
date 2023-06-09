"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = exports.InventoryModel = exports.ProcessModel = exports.WorkerModel = exports.DrugsModel = exports.PharmacyModel = void 0;
const mongoose_1 = require("mongoose");
const schima_1 = require("./schima");
exports.PharmacyModel = (0, mongoose_1.model)("pharmacy", schima_1.PharmacySchima, "pharmacy");
exports.DrugsModel = (0, mongoose_1.model)("drugs", schima_1.DrugsSchima, "drugs");
exports.WorkerModel = (0, mongoose_1.model)("worker", schima_1.WorkerSchima, "worker");
exports.ProcessModel = (0, mongoose_1.model)("process", schima_1.processSchima, "process");
exports.InventoryModel = (0, mongoose_1.model)("inventory", schima_1.InVentorySchima, "inventory");
exports.AccountModel = (0, mongoose_1.model)("account", schima_1.AccountSchima, "account");

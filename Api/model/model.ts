import { Model, model } from "mongoose";
import { AccountSchima, DrugsSchima, InVentorySchima, PharmacySchima, WorkerSchima, processSchima } from "./schima";
export const PharmacyModel = model("pharmacy", PharmacySchima, "pharmacy");
export const DrugsModel = model("drugs", DrugsSchima, "drugs");
export const WorkerModel = model("worker", WorkerSchima, "worker");
export const ProcessModel = model("process", processSchima, "process");
export const InventoryModel = model("inventory", InVentorySchima, "inventory");
export const AccountModel = model("account", AccountSchima, "account");
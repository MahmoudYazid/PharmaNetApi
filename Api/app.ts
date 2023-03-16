import express,{ Express } from "express";
import { AddPharmacyRouter } from "./router/AddpharmacyApi";

import { AddDrugRouter } from "./router/AddDrugsToDbApi";
import { AddAccountRouter } from "./router/AddAccountApi";
import { AddWorkerRouter } from "./router/addWorkerApi";
import { BuyDrugRouter } from "./router/BuyDrugApi";
import { SellDrugRouter } from "./router/SellDrugApi";
import { DeleteProcessRouter } from "./router/DeleteProcess";
import { DelteContractRouter } from "./router/DeleteContractApi";
import { GetDrugFromInventoryRouter } from "./router/GetDrugFromInventoryApi";
import { GetDrugExistInSystemRouter } from "./router/GetDrugExistInSystemApi";
import { GetAllPharmaciesThatWorkInApiRouter } from "./router/GetAllPharmaciesWorkInApi";
import { GetTheOwnerRouter } from "./router/GetTheOwner";
import { LoginRouter } from "./router/LoginApi";
import { GetProcessesOfPharmacyRouter } from "./router/GetProcessesOfpharmacyApi";
import { GetWorkersInPharmacyRouter } from "./router/GetWorkersInPharmacyApi";
import { GetWorkerNameByIdRouter } from "./router/GetWorkerIdApi";

const core = require("cors");


 

const app=express();
app.use(
  core({
    origin: "*",
  })
);

app.post("/BuyDrug", BuyDrugRouter);
app.post("/addpharmacy", AddPharmacyRouter);
app.post("/SellDrug",SellDrugRouter);
app.post("/AddDrugToDb",AddDrugRouter);
app.post("/AddAccount", AddAccountRouter);
app.post("/AddWorker",AddWorkerRouter);
app.delete("/DeleteProcess",DeleteProcessRouter);
app.delete("/DeleteContract",DelteContractRouter);
app.get("/GetDrugFromInventory", GetDrugFromInventoryRouter);
app.get("/GetDrugExistInSystem", GetDrugExistInSystemRouter);
app.get("/GetAllPharmaciesThatWorkIn", GetAllPharmaciesThatWorkInApiRouter);
app.get("/GetTheOwner", GetTheOwnerRouter);
app.get("/Login", LoginRouter);
app.get("/GetProcessesOfPharmacy", GetProcessesOfPharmacyRouter);
app.get("/GetWorkersInPharmacy",GetWorkersInPharmacyRouter);
app.get("/GetWorkerNameById",GetWorkerNameByIdRouter);
app.listen(8000);

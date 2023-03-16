import { Router,Express } from "express";
import { InventoryModel, ProcessModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const BuyDrugRouter=Router()

// DrugName , WorkerId , PharmacyId, Quantity
BuyDrugRouter.post('/BuyDrug',(req, res,next)=>{

     mongoose.connect(ConnString).then(()=>{
         const NewProcess = new ProcessModel({
           PharmacyId: req.query.PharmacyId,
           WorkerId: req.query.WorkerId,
           quantity:req.query.Quantity,
           DrugName: req.query.DrugName,
           TypeOfProcess: "buy",
         });
         NewProcess.save();
         next();

     });
   
});

BuyDrugRouter.use((req, res,next)=>{

    mongoose.connect(ConnString).then(()=>{
          InventoryModel.find({
            DrugName: req.query.DrugName,
            PharmacyId: req.query.PharmacyId,
          }).then((data)=>{
            if(data.length>0){
                data.map((extracteddata)=>{
                    const NewQuantity=Number(req.query.Quantity)+Number(extracteddata.Quantity)


                    InventoryModel.findByIdAndUpdate(extracteddata._id, {
                      DrugName: req.query.DrugName,
                      PharmacyId: req.query.PharmacyId,
                      Quantity: String(NewQuantity),
                    }).then(() => res.send(200));
                   
                    

                })
            }else{
                const NewItemInInventory = new InventoryModel({
                  DrugName: req.query.DrugName,
                  PharmacyId: req.query.PharmacyId,
                  Quantity: Number(req.query.Quantity),
                });
                NewItemInInventory.save();
                res.sendStatus(200)
            }
            

          });

    });
  
})


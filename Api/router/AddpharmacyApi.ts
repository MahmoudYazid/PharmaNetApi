import { Express,Router,Request,Response } from "express";
import { AccountModel, PharmacyModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const  AddPharmacyRouter=Router()

///addpharmacy?PharmacyName=&OwnerId=
AddPharmacyRouter.post("/addpharmacy",(req,res,next)=>{

    mongoose.connect(ConnString).then(()=>{
        PharmacyModel.find({
          PharmacyName: req.query.PharmacyName,
          OwnerId: req.query.OwnerId,
        }).then((data)=>{
            if(data.length===0){
                next();
            }else{
                res.sendStatus(404)
            }
        });
        
    })
})


AddPharmacyRouter.use((req,res,next) => {

       mongoose.connect(ConnString).then(() => {
         const AddNewData = new PharmacyModel({
           PharmacyName: req.query.PharmacyName,
           OwnerId: req.query.OwnerId,
         });
         AddNewData.save();
         next()
         
       });

 
});


AddPharmacyRouter.use((req, res, next) => {

  mongoose.connect(ConnString).then(() => {
    PharmacyModel.find({ PharmacyName: req.query.PharmacyName }).then((data)=>{
      data.map((ExtractedData)=>{
        res.locals.PharmacyId=ExtractedData._id
        next()

      })
    });

   
  });
});
AddPharmacyRouter.use((req, res, next) => {
  mongoose.connect(ConnString).then(() => {
    AccountModel.find({_id:req.query.OwnerId} ).then((data) => {
      data.map((extdata)=>{
        res.locals.username = extdata.UseName;
        
        next();
      });
        
      
    });
  });
});

AddPharmacyRouter.use((req, res, next) => {

  mongoose.connect(ConnString).then(() => {
    const AddNewData = new WorkerModel({
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
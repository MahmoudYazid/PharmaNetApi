import { Express, Router, Request, Response } from "express";
import { AccountModel, PharmacyModel, WorkerModel } from "../model/model";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";

export const LoginRouter = Router();

///Login?UserName=&Password=
LoginRouter.get("/Login", (req, res, next) => {

  mongoose.connect(ConnString).then(() => {
    AccountModel.find({
      UseName: req.query.UserName,
      password: req.query.Password,
    }).then((data) => {
      if (data.length > 0) {
        data.map((ExtractedData) => {
          res.locals.UserId = ExtractedData._id;
          next();
        })

      } else {
        res.sendStatus(404);
      }
    });
  });
});

LoginRouter.use((req, res, next)=>{

    mongoose.connect(ConnString).then(() => {
      WorkerModel.find({
        WorkerId: res.locals.UserId,
      }).then((data) => {
        if(data.length>0){
        res.json(data)

      }else{
res.json([{ WorkerId: res.locals.UserId }]);
      }
      
      
      
      
    })

})})

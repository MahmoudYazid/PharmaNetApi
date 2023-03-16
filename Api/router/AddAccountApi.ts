import { Router } from "express";
import mongoose from "mongoose";
import { ConnString } from "../model/connectionstring";
import { AccountModel } from "../model/model";
///AddAccount?Name=&phone=&password=
export const AddAccountRouter = Router();
AddAccountRouter.post("/AddAccount",(req,res,next)=>{

    mongoose.connect(ConnString).then(()=>{
        AccountModel.find({
          UseName: req.query.Name,
          Phone: req.query.phone,
          password:req.query.password
        }).then((data)=>{
            data.length<=0?next():res.send(404)
        });
    })



})
AddAccountRouter.use((req, res, next) => {

     mongoose.connect(ConnString).then(()=>{
        const NewAccount = new AccountModel({
          UseName: req.query.Name,
          Phone: req.query.phone,
          password: req.query.password,
        });
        NewAccount.save()
        res.send(200)
     })




});

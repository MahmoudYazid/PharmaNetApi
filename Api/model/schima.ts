import { time } from "console";
import { Schema } from "mongoose";

export const PharmacySchima= new Schema({
    PharmacyName:String,
    OwnerId:String

})


export const DrugsSchima = new Schema({
  DrugName: String
  
});

export const WorkerSchima = new Schema({
  PharmacyId: String,
  PharmacyName: String,
  WorkerId: String,
  Owner: String,
  username:String
});

export const processSchima = new Schema({
  PharmacyId: String,
  WorkerId: String,
  DrugName:String,
 
  TypeOfProcess:String,
  quantity:String

});

export const InVentorySchima = new Schema({
  DrugName: String,
  PharmacyId: String,
  Quantity: String,
});

export const AccountSchima = new Schema({
  UseName: String,
  Phone: String,
  password:String
  
});

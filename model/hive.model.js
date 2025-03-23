const db = require ('../config/db');
const mongoose=require('mongoose');
const UserModel =require("../model/user.model")
const {Schema} = mongoose;
const hiveSchema = new Schema({
    userId:{
        type :Schema.Types.ObjectId,
        ref :UserModel.modelName

    },
    title:{
        type:String,
        required:true

    }

}) ;
const HiVeModel = db.model ('hive',hiveSchema);
module.exports =HiVeModel;
const mongoose=require("mongoose");
const HoldingsSchema=new mongoose.Schema({
    name:String,
    price:Number,
    mode:String,
});

module.exports={HoldingsSchema};
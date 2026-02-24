const mongoose=require("mongoose");

const {HoldingSchema}=require("../schemas/HoldingsSchema.js");

const HoldingModel=mongoose.model("holding",HoldingSchema);

module.exports=HoldingModel;
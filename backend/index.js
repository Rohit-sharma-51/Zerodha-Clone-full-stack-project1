require('dotenv').config();
const mongoose = require('mongoose');
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB locally"))
.catch((err) => console.error("DB connection error:",err));
const app=express();

app.use(cors());
app.use(bodyParser.json());
const HoldingModel=require("./model/HoldingModel.js");
const PositionsModel=require("./model/PositionsModel.js");

// app.get("/addHoldings",async(req,res)=>{
//     let tempholdings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//       },
//     ];
//     await HoldingModel.insertMany(tempholdings);
//     res.send("Data inserted successfully");
// });

// app.get("/addPositions",async (req,res)=>{
//   const data=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },

//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];




// await PositionsModel.insertMany(data);
// res.send("Position data has inserted successfully");
// })


// Get data from Database


app.get("/allHoldings",async (req,res)=>{
  let holdingData=await HoldingModel.find();
  res.json(holdingData);
})


const HoldingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg:Number,
  price: Number,
  net:String,
});

// Add Data in holdings
app.post("/adddata", async (req, res) => {
  try {

    const { name, qty, avg, price, net } = req.body;
    if (!name || !qty || !avg || !price || !net) {
      return res.sendStatus(400);
    }
    const newHolding = new HoldingModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      avg:Number(req.body.avg),
      price: Number(req.body.price),
      net:String(req.body.net)
    });

    await newHolding.save();

    const holdingData = await HoldingModel.find();
    res.json(holdingData);

  } catch (err) {
    console.log(err);
  }
});

const PositionSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg:Number,
  price: Number,
  net:String,
});

// Add Data in positions
app.post("/addPosition", async (req, res) => {
  try {
    const { name, qty, avg, price, net } = req.body;
    if (!name || !qty || !avg || !price || !net) {
      return res.sendStatus(400);
    }

    // Insert data 
    const newPosition = new PositionsModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      avg:Number(req.body.avg),
      price: Number(req.body.price),
      net:String(req.body.net)
    });
    
    await newPosition.save();

    const positionData = await PositionsModel.find();
    res.json(positionData);
  } catch (err) {
    console.log(err);
  }
});





// Get data from Database
app.get("/allPositions",async(req,res)=>{
  let positionData=await PositionsModel.find();
  res.json(positionData);
})


// Update holding data
app.patch("/updateHolding/:id",async (req,res)=>{
    const id=req.params.id;
    const {name,qty,avg,price}=req.body;     //deconstructing
    if (!name || !qty || !avg || !price) {
      return res.sendStatus(400);
    }

    await HoldingModel.findByIdAndUpdate(id,{name,qty,avg,price});
    let holdingData=await HoldingModel.find();
    res.json(holdingData);
});

// updating position data
app.patch("/updatePosition/:id",async(req,res)=>{
  const id=req.params.id;
  const {name,qty,avg,price}=req.body;
  if (!name || !qty || !avg || !price) {
      return res.sendStatus(400);
    }
  await PositionsModel.findByIdAndUpdate(id,{name,qty,avg,price});
  let positionData=await PositionsModel.find();
    res.json(positionData);
});

// Delete Holding data
app.delete("/deleteHolding/:id",async(req,res)=>{
  const id=req.params.id;
  await HoldingModel.findByIdAndDelete(id);
  res.status(200).json({
    message:"Holding data has deleted"
  });
});


// Delete Position data
app.delete("/deletePosition/:id",async(req,res)=>{
  const id=req.params.id;
  await PositionsModel.findByIdAndDelete(id);
  res.status(200).json({
    message:"Position data has deleted"
  });
});




app.listen(3001,()=>{
    console.log("App started");
});
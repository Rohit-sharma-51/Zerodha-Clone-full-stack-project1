import React from "react";
// import {positions} from "../Data/data.js";
import {useState,useEffect} from "react";
import axios from "axios";

const Positions = () => {
  const[positions,setPositions]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:3001/allPositions")
      .then((res)=>{
        console.log(res.data);
        setPositions(res.data);
      });
  },[]);


  /* delete function  without arrow function eror is coming*/
  const handleDelete=async (id)=>{
    try{
      await axios.delete(`http://localhost:3001/deletePosition/${id}`)
  
      // update data after delete
      const res=await axios.get("http://localhost:3001/allPositions")
      setPositions(res.data);
    }catch(err){
      console.log("Error");
    }
  }


  // Edit function
const handleEdit=async (id)=>{
  try{
    const newName = prompt("Enter new name:");
    const qty=prompt("Enter the quantitiy:");
    const avg=prompt("Enter the average cost:");
    const price=prompt("Enter the Ltp:");
    const res=await axios.patch(`http://localhost:3001/updatePosition/${id}`,{
      name:newName,
      qty:qty,
      avg:avg,
      price:price
    })
    setPositions(res.data);
  }catch(err){
    console.log(err);
  }
}



const addPosition=async ()=>{
  try{
    const name=prompt("Enter Stock name");
    const qty=prompt("Enter Quantity");
    const avg=prompt("Enter Average");
    const price=prompt("Enter Price");
    const net=prompt("Enter net");
  
    const res=await axios.post("http://localhost:3001/addPosition",{
      name:name, 
      qty: qty,
      avg:avg,
      price:price,
      net:net
    });
  
    setPositions(res.data);
  }catch(err){
    console.log(err);
  }
}



  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>
      <div className="container">
      <button className="addbtn" onClick={addPosition}>+Add Position</button>
      </div>
      <div className="order-table">
        <table>
          <tr>
            {/* <th>Product</th> */}
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {/* Dummy data */}
          {positions.map((stock,index)=>{
          const curValue=stock.price*stock.qty;
          const isProfit=curValue-stock.avg*stock.qty>=0.0;
          const profClass=isProfit?"profit":"loss";
          const totalCost = stock.avg * stock.qty;
          const netChange = ((curValue - totalCost) / totalCost) * 100;           
          
          
          return(
            <tr key={index}>
            {/* <td>{stock.product}</td> */}
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
            <td className={profClass}>{netChange}</td>
            <button onClick={()=>handleEdit(stock._id)}>Edit</button> &nbsp;
            <button onClick={()=>handleDelete(stock._id)}>Delete</button>
            
            </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
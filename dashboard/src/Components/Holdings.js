import {useState,useEffect} from "react";
import axios from "axios";

const Holdings = () => {
  const[holdings,setHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/allHoldings")
    .then((res)=>{
      setHoldings(res.data);
    });
},[]);

/* delete function  without arrow function eror is coming*/
const handleDelete=async (id)=>{
  try{
    await axios.delete(`http://localhost:3001/deleteHolding/${id}`)

    // update data after delete
    const res=await axios.get("http://localhost:3001/allHoldings")
    setHoldings(res.data);
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
    const res=await axios.patch(`http://localhost:3001/updateHolding/${id}`,{
      name:newName,
      qty:qty,
      avg:avg,
      price:price
    })
    setHoldings(res.data);
  }catch(err){
    console.log(err);
  }
}


const addHolding=async ()=>{
  try{
    const name=prompt("Enter Stock name");
    const qty=prompt("Enter Quantity");
    const avg=prompt("Enter Average");
    const price=prompt("Enter Price");
    const net=prompt("Enter net");
  
    const res=await axios.post("http://localhost:3001/adddata",{
      name:name, 
      qty: qty,
      avg:avg,
      price:price,
      net:net
    });
  
    setHoldings(res.data);
  }catch(err){
    console.log(err);
  }
}


  return (
    <>
      <h3 className="title">({holdings.length})</h3>
      <div className="container">
      <button className="addbtn " onClick={addHolding}>+ Add Holding</button>
      </div>



      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
          </tr>

           {/*Dummy data */}
           {holdings.map((stock,index)=>{
            const curValue=stock.price*stock.qty;
            const isProfit=curValue-stock.avg*stock.qty>=0.0;
            const profClass=isProfit?"profit":"loss";
            const totalCost = stock.avg * stock.qty;
            const netChange = ((curValue - totalCost) / totalCost) * 100; // in percent
            
            return(
              <tr>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{netChange}</td>
                  &nbsp;
                  <button onClick={()=>handleEdit(stock._id)}>Edit</button> &nbsp;
                  <button onClick={()=>handleDelete(stock._id)}>Delete</button>
                  
                </tr>
            );
           })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
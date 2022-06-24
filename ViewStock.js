import React, { useState,useEffect } from "react";
import DataTable from "./DataTable";


export default function TestTable(){
    const [data,setData] = useState([]);
    const [q,setQ] = useState("");

    useEffect(()=>{
        fetch("http://localhost:8082/api/v1.0/market/stock/get/COG`")
        .then((response) => response.json())
        .then((json)=>setData(json));
 },[]);

 function search(rows){
     const columns = rows[0] && Object.keys(rows[0]);
     return rows.filter((row) =>
     columns.some(
         (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1)
     )
     
     
 }

    return(
        <div>
            <div>
                <label>Search here: </label>
                <input type="text" value={q} onChange={(e)=> setQ(e.target.value)}/>
                </div>
            <div>
                <DataTable data={search(data)}/>
            </div>
        </div>
    );

}

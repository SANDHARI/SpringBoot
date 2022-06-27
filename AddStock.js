import React, { Fragment, useState,useEffect } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const AddStock = () =>{

    useEffect(() =>{
        document.title = "Add Stock";
    }, []);

    const [stock,setStock] = useState({})
    //form handler function
    
    const handleForm = (e) =>{
        console.log(stock);
        postDataToBackend(stock);
        e.preventDefault();
    };

    const postDataToBackend=(data) =>{
        axios.post(`http://localhost:8082/api/v1.0/market/stock/add/COG`,data).then(
            (response) => {
                console.log(response);
                console.log("Sucess");
            },(error) => {
                console.log(error);
                console.log("error");
    
                }
    
        );
    };
    
    return(
       <Fragment>
           <h2>Please Add Stock to the company </h2>
           <Form onSubmit={handleForm}>
               <FormGroup>
               <label>Select Company: </label>
               <select onChange={(e)=> {setStock({...stock,code: e.target.value});}} type="text" name="code" id="code">
                    <option></option>
                    <option>COG</option>
                    <option>TCS</option>
                    <option>AWS</option>
                    <option>V3</option>
                </select>
             </FormGroup>
             <FormGroup>
             <label>Stock Price: </label>
                <Input onChange={(e)=> {setStock({...stock,stockprice: e.target.value});}} type="text" name="stockprice" id="stockprice"/>
             </FormGroup>

             <FormGroup>
             <Button type="submit" name="addstockprice" id="addstockprice">Add</Button>
             </FormGroup>
            

           </Form>


       </Fragment>

    )
}
export default AddStock;
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input } from 'reactstrap';



const AddCompany = () =>{

useEffect(() =>{
    document.title = "Add Company";
}, []);

const [company,setCompany] = useState({})
//form handler function

const handleForm = (e) =>{
    console.log(company);
    postDataToBackend(company);
    e.preventDefault();
};

//Function to post data to backend
const postDataToBackend=(data) =>{
    axios.post(`http://localhost:8081/api/v1.0/market/company/register`,data).then(
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
            <h2>Please Register your company </h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                
    <label>Company Code: </label>
    <Input onChange={(e)=> {setCompany({...company,code: e.target.value});}} type="text" name="code" id="code"/>
    
    </FormGroup>
    <FormGroup>
    
    <label>Company Name: </label>
    <Input onChange={(e)=> {setCompany({...company,name: e.target.value});}} type="text" name="name" id="name"/>
    
    </FormGroup>

        <FormGroup>
    
    <label>Company Ceo: </label>
    <Input onChange={(e)=> {setCompany({...company,ceo: e.target.value});}} type="text" name="ceo" id="ceo"/>
    
</FormGroup>
<FormGroup>
    
    <label>Turnover: </label>
    <Input onChange={(e)=> {setCompany({...company,turnover: e.target.value});}} type="text" name="turnover" id="turnover"/>
    
</FormGroup>
<FormGroup>
   
    <label>Website: </label>
    <Input onChange={(e)=> {setCompany({...company,website: e.target.value});}} type="text" name="website" id="website"/>
    
</FormGroup>
<FormGroup>
    
    <label>Stock Exchange: </label>
    <Input onChange={(e)=> {setCompany({...company,stockexchange: e.target.value});}} type="text" name="stockexchange" id="stockexchange"/>
    
</FormGroup>
<FormGroup>
   
    <Button type="submit" name="register">Register</Button>
    
    </FormGroup>
                
            </Form>


        </Fragment>
        

    )
    }

export default AddCompany;
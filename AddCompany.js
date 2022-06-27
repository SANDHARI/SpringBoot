import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input } from 'reactstrap';



const AddCompany = () =>{


    useEffect(() =>{
        document.title = "Add Company";
    }, []);
    
    const [company,setCompany] = useState({})
    const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
    //form handler function
    
    const handleForm = (e) =>{
        console.log(company);
        postDataToBackend(company);
        e.preventDefault();
        setFormErrors(validate(company));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(company);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        if (!values.code) {
          errors.code = "Company Code is required!";
        }
        if (!values.name) {
          errors.name = "Company Name is required!";
        } 
        if (!values.ceo) {
            errors.ceo = "Ceo Name is required!";
          } 
          if (!values.turnover) {
            errors.turnover = "Company Name is required!";
          } else if (values.turnover < 10) {
            errors.turnover = "Turnover should be greater than 10 cr!";
          }
          if (!values.website) {
            errors.website = "Company website is required!";
          }
    
        if (!values.stockexchange) {
          errors.stockexchange = "Stock Exchange is required";
        } 
        return errors;
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
    <div className="container">
     <Fragment>
                <h2>Please Register your company </h2>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div><h5>Company Registered successfully!</h5></div>
          ) : (
            <h1></h1>
          )}
        <Form onSubmit={handleForm}>

                <FormGroup> 
                    <label>Company Code: </label>
                    <Input onChange={(e)=> {setCompany({...company,code: e.target.value});}} type="text" name="code" id="code"/>
                </FormGroup>
                    <p>{formErrors.code}</p>
                <FormGroup>
                    <label>Company Name: </label>
                    <Input onChange={(e)=> {setCompany({...company,name: e.target.value});}} type="text" name="name" id="name"/>
                </FormGroup>
                    <p>{formErrors.name}</p>
                
                <FormGroup>
                    <label>Company Ceo: </label>
                    <Input onChange={(e)=> {setCompany({...company,ceo: e.target.value});}} type="text" name="ceo" id="ceo"/>
                </FormGroup>
                <p>{formErrors.ceo}</p>

                <FormGroup>
                    <label>Turnover: </label>
                    <Input onChange={(e)=> {setCompany({...company,turnover: e.target.value});}} type="text" name="turnover" id="turnover"/>
                </FormGroup>
                <p>{formErrors.turnover}</p>

                <FormGroup>
                    <label>Website: </label>
                    <Input onChange={(e)=> {setCompany({...company,website: e.target.value});}} type="text" name="website" id="website"/>
                </FormGroup>
                <p>{formErrors.website}</p>

                <FormGroup>
                    <label>Stock Exchange: </label>
                    <Input onChange={(e)=> {setCompany({...company,stockexchange: e.target.value});}} type="text" name="stockexchange" id="stockexchange"/>
                </FormGroup>
                <p>{formErrors.stockexchange}</p>

                <FormGroup>
                    <Button type="submit" name="register">Register</Button>
                </FormGroup>
                    
        </Form>
    
    
    </Fragment>
    </div>
            )}


export default AddCompany;
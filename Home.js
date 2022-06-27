import React from "react";
import {Container } from "reactstrap";
import sm from "./stockmarket.jpg"


const Home=()=>{
    return(
    <div>


        <Container>
        <h3>Welcome to the Stock Market Application</h3>
        <img src={sm}></img>
        
        </Container>
    </div>
               
        
    
    )};
export default Home;

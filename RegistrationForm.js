import React, { useState } from 'react';
import axios from 'axios';



const RegistrationForm = () =>{
    const url="http://localhost:8200/api/v1.0/market/company/register"
const [company,setCompany] = useState(
    {
        id:"",
        code:"",
        name:"",
        ceo:"",
        turnover:"",
        website:"",
        stockexchange:""
    }
)
const submit = (e) =>{
    e.preventDefault();
    axios.post(url,{
        code: company.code,
        name: company.name,
        ceo: company.ceo,
        turnover: company.turnover,
        website:company.website,
        stockexchange:company.stockexchange
    })

    .then(res =>{
        console.log(res.company)
    }

    )

}


const handle= (e) =>{

    const newCompany = {...company}
    newCompany[e.target.name]=e.target.value
    setCompany(newCompany)
    console.log(newCompany)
}


    return(
        <div>

            <h1>Please Register your company </h1>
            <form onSubmit={(e)=> submit(e)}>
                <div>
                <label>Company Code: </label>
                <input onChange={(e)=>handle(e)} value ={company.code} type="text" name="code"/>
                </div>
                
                <div>
                <label>Company Name: </label>
                <input onChange={(e)=>handle(e)} value ={company.name}type="text" name="name"/>
                </div>

                <div>
                <label>Company Ceo: </label>
                <input onChange={(e)=>handle(e)} value ={company.ceo} type="text" name="ceo"/>
                </div>

                <div>
                <label>Turnover: </label>
                <input onChange={(e)=>handle(e)} value ={company.turnover} type="text" name="turnover"/>
                </div>

                <div>
                <label>Website: </label>
                <input onChange={(e)=>handle(e)} value ={company.website} type="text" name="website"/>
                </div>

                <div>
                <label>Stock Exchange: </label>
                <input onChange={(e)=>handle(e)} value ={company.stockexchange} type="text" name="stockexchange"/>
                </div>

                <div>
                <button type="submit" name="register">Register</button>
                </div>
            </form>

        </div>

    )
}
export default RegistrationForm;

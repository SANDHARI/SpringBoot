
import React from "react";
import { Table } from "reactstrap";


class CompanyTable extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        };
       //this.callAPI = this.callAPI.bind(this)
       // this.callAPI();
    }
    componentDidMount(){
        //fetch data from API
        fetch("http://localhost:8081/api/v1.0/market/company/getall").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            this.setState({
                items: data.data
            });
        })
        .catch(error =>{
            console.log('Fetching and parsing error', error);
        })

        
    }
    render(){
        let items= this.state.items;
        console.log(items)
return(
    <div>
       
       <Table hover>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Ceo</th>
                    <th>Turnover</th>
                    <th>Website</th>
                    <th>Stock Exchange</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    </div>
);
    }

}
export default CompanyTable;
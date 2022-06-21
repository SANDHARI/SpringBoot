import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () =>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-company" action>Add Company</ListGroupItem>
            <ListGroupItem tag="a" href="/view-company" action>View Company</ListGroupItem>
            <ListGroupItem tag="a" href="/add-stock" action>Add Stocks</ListGroupItem>
            <ListGroupItem tag="a" href="/view-stock" action>View Stock Details</ListGroupItem>
        </ListGroup>
    )
}
export default Menu;
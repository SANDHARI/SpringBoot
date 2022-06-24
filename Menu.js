import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import Home from './Home';
import { Route, Routes } from "react-router";

const Menu = () =>{
    return(
        <ListGroup>
            <Link className="list-group-tem list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-tem list-group-item-action" tag="a" to="/add-company" action>Add Company</Link>
            <Link className="list-group-tem list-group-item-action" tag="a" to="/view-company" action>View Company</Link>
            <Link className="list-group-tem list-group-item-action" tag="a" to="/add-stock" action>Add Stocks</Link>
            <Link className="list-group-tem list-group-item-action" tag="a" to="/view-stock" action>View Stock Details</Link>
        </ListGroup>
        
    )
}


export default Menu;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, BrowserRouter as Router } from "react-router-dom";
import {NavItem} from 'react-bootstrap'

const Header = ()=>{
    return(
        
<Navbar bg="light" expand="lg">
        <Router>
            <h2>
            <Link to="/list-user"> List</Link>
            </h2>
            <h2>
            <Link to="/add-user"> Add</Link>
            </h2>
        
        </Router>

        </Navbar>
        
    );
}

export default Header;
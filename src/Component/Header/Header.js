import React from 'react';
import {  Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <div  className="header-part">
                <Container>
            <div className="">
                    <div className="header-nav text-center">
                        <NavLink
                         activeStyle={{fontWeight: "bold", color: "#ffe600"}} 
                         className="margin-nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={{fontWeight: "bold", color: "#ffe600"}} className="margin-nav" to="/about">About Us</NavLink>
                        <NavLink activeStyle={{fontWeight: "bold", color: "#ffe600"}} className="margin-nav" to="/services">Services</NavLink>
                        <NavLink activeStyle={{fontWeight: "bold", color: "#ffe600"}} className="margin-nav" to="/contact">Contact Us</NavLink>
                    </div>
                   
            </div>
                </Container>
            
        </div>
    );
};

export default Header;



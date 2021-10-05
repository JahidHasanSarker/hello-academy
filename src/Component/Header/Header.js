import React from 'react';
import {  Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const activeStyle = {fontWeight: "bold", color: "#ffe600"};
    
    return (
        <div  className="header-part">
                <Container>
            <div>
                    <div className="header-nav text-center">
                        <NavLink activeStyle={activeStyle} 
                            className="margin-nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle}
                            className="margin-nav" to="/about">About Us</NavLink>
                        <NavLink activeStyle={activeStyle}
                            className="margin-nav" to="/services">Services</NavLink>
                        <NavLink activeStyle={activeStyle}
                            className="margin-nav" to="/contact">Contact Us</NavLink>
                    </div>
                   
            </div>
                </Container>
            
        </div>
    );
};

export default Header;



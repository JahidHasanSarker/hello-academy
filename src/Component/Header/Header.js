import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto mx-auto">
                        <NavLink className="margin-nav" to="/home">Home</NavLink>
                        <NavLink className="margin-nav" to="/about">About Us</NavLink>
                        <NavLink className="margin-nav" to="/services">Services</NavLink>
                        <NavLink className="margin-nav" to="/contact">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
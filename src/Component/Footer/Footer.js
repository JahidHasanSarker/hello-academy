import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <div className="footer-part mx-auto">

                        <h6 className="text-white">Education React Site &copy; by Frontend Developer</h6>

                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;
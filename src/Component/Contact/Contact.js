import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="bg-image">
                <img src="https://eduma.thimpress.com/demo-university-2/wp-content/themes/eduma/images/bg-page.jpg" height="300px" width="100%" alt=""/>
            </div>
            <div className="bg-text">
            <h2>Contact</h2>
            </div>

                <div className="container py-5">
                    <div className="d-flex justify-content-center my-5">
                        <div className="me-5">
                            <h3 className="py-3">CONTACT INFO</h3>
                            <p className="text-muted pb-5">Welcome to our Website. We are glad to have you around.</p>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5><FontAwesomeIcon icon={faPhone} className="me-3" />Phone</h5>
                                    <p className="text-muted">+7 (800) 123 ** **</p>
                                </div>

                                <div>
                                    <h5><FontAwesomeIcon icon={faMailBulk} className="me-3" />Email</h5>
                                    <p className="text-muted">hello@learn.com</p>
                                </div>
                            </div>
                                <hr />
                                <div>
                                    <h5><FontAwesomeIcon icon={faAddressCard} className="me-3" />Address</h5>
                                    <p>PO Box 97845 Baker st. 567, Los Angeles, California, US.</p>
                                </div>
                        </div>
                        <div className="ms-5">
                            <h3 className="py-3">SEND A MESSAGE</h3>
                            <p className= "text-muted">Your email address will not be published. Required fields are marked.</p>
                            <Form className="mt-4">
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <hr />
                                        <option>New York</option>
                                        <option>California</option>
                                        <option>Silicon Vally</option>
                                    </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="warning" type="submit">
                                    Submit
                                </Button>
                                </Form>
                        </div>
                    </div>
                </div>


        </div>
    );
};

export default Contact;
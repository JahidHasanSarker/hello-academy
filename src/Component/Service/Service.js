import { faLocationArrow, faMoneyBill, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
const {title, text, img, key, fee, location} = props.service;
    return (
        <div className="container">
            <div className="service-card">
                <span>{key}</span>
                <div className="service-text">
                    <h3 className="py-3">{title}</h3>
                    <div className="service-fee text-muted py-3">
                        <p><FontAwesomeIcon icon={faMoneyBill} />  ${fee} </p>
                        <p><FontAwesomeIcon icon={faLocationArrow} /> {location}</p>
                    </div>
                    <p className='text-muted mb-5'>{text}</p>
                    <Link to="/contact"><Button variant="outline-warning"><FontAwesomeIcon icon={faPhone} className="me-2" />Contact</Button></Link>
                </div>
                <img src={img} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Service;
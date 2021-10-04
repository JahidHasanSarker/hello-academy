import { faLocationArrow, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
                    <p className='text-muted'>{text}</p>
                </div>
                <img src={img} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Service;
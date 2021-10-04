import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]); 
    useEffect(() => {
        fetch('./education.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className="bg-image">
                <img src="https://eduma.thimpress.com/demo-university-2/wp-content/themes/eduma/images/bg-page.jpg" height="300px" width="100%" alt=""/>
            </div>
            <div className="bg-text">
                 <h2>Service</h2>
            </div>

            {
                services.map(service => <Service key={service.key} service={service}></Service>)
            }

        </div>
    );
};

export default Services;
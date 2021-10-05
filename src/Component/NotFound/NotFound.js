import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="bg-image pb-5">
                <img src="https://eduma.thimpress.com/demo-university-2/wp-content/themes/eduma/images/bg-page.jpg" height="300px" width="100%" alt=""/>
            </div>
            <div className="bg-text">
            <h2>404 Page</h2>
            </div>

            <div className="container py-5">
                <div className="my-5">
                    <div className="error-info d-flex justify-content-center align-items-center py-5">
                        <img src="https://eduma.thimpress.com/demo-university-2/wp-content/themes/eduma/images/image-404.jpg" alt="" />

                        <div className="error-text">
                            <h1>404 <span>ERROR!</span></h1>
                            <p>Sorry, we can't find the page you are looking for. Please go to <NavLink className="error-link" to="/home">Home</NavLink></p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;
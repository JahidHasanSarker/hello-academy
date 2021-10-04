import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="bg-image">
                <img src="https://eduma.thimpress.com/demo-university-2/wp-content/themes/eduma/images/bg-page.jpg" height="300px" width="100%" alt=""/>
            </div>
            <div className="bg-text">
                <h2>About</h2>
            </div>

            <div className="container">

                <div className="text-center py-5">
                    <h3>OUR STORY</h3>
                    <p>It is a long established fact that a reade.</p>
                </div>

                 <div className="about-numbers py-5">
                    <div className="about-border px-5">
                        <h2>55000</h2>
                        <p>FOREIGN FOLLOWERS</p>
                    </div>
                    <div className="about-border px-5"> 
                        <h2>60</h2>
                        <p>CERTIFIED TEACHERS</p>
                    </div>
                    <div className="about-border px-5">
                        <h2>2240</h2>
                        <p>STUDENTS ENROLLED</p>
                    </div>
                    <div className="px-5 text-center">
                        <h2>215</h2>
                        <p>COMPLETE COURSES</p>
                    </div>
                </div>

                <div className="py-5 text-center">
                    <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/slider-1.jpg" alt=""/>
                </div>

                <div>

                    <div className="text-center py-5">
                        <h3>MEET OUR TEAM</h3>
                        <p>We are always ready for helping you</p>
                        <Button className="mt-5" variant="warning">Join Our Team</Button>
                    </div>
                    <div className="about-img mb-5">

                        <div>
                            <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/team-7-200x200.jpg" alt=""/>
                            <h5>Belinda</h5>
                            <p>JS DEVELOPER</p>
                        </div>

                        <div>
                            <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/team-3-200x200.jpg" alt=""/>
                            <h5>Christian</h5>
                            <p>CREATIVE DIRECTOR</p>
                        </div>

                        <div>
                            <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/team-5-200x200.jpg" alt=""/>
                            <h5>Robert</h5>
                            <p>OFFICE MANAGER</p>
                        </div>

                        <div>
                            <img src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/11/team-6-200x200.jpg" alt=""/>
                            <h5>Tony Teo</h5>
                            <p>SUPPORT MANAGER</p>
                        </div>


                    </div>
                </div>
                
            </div>
            




        </div>
    );
};

export default About;
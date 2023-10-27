import React from "react";
// import {BsPlusCircleDotted} from "react-icons/bs/"
function About() {
    return (
     <div className='section'>

     
            <div className='row'>
                <div className='col-lg-4 about-call-us ' >
                <div className="hok" >
                    <h2>CALL US NOW</h2>
                    <h3>+91-9870525656</h3>
                </div>
                </div>
                <div className='col-lg-4 about-start-india'>
                {/* <BsPlusCircleDotted />   */}
                    <h2 >STARTUP INDIA</h2>
                    <h6 style={{width:'302px'}}>We support the Startup India initiative that
                        aims to accelerate entrepreneurship in the country and create startups.</h6>
                </div>
                <div className='col-lg-4 about-start-india'>
                    <h2>DIGITAL INDIA</h2>
                    <h6>We support the Digital India initiative for digitalizing Government
                        activities and helping improve digital literarcy.</h6>
                </div>
            </div>
</div>
    );
}

export default About;
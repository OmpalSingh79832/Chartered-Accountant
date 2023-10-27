import React from 'react'
import {GoCopy} from "react-icons/go"
import {PiDatabaseDuotone} from "react-icons/pi"
import {FcHome} from "react-icons/fc"
import {PiHandshakeBold} from "react-icons/pi"
function Experience() {
    return (
        <>

                <div className='row experience-bg'>
        
                    <div className='col-lg-6 ' style={{backgroundColor:"#4848a1"}}>
                        <h4 style={{color:"#2b0af9,", fontWeight:"900", fontSize:"40px"}}>Why Choose Us</h4>
                        <h2 style={{color:"#0cf273", fontWeight:"900",  fontSize:"40px"}}>Our Mission</h2>
                        <p style={{color:"white"}}>
                        "We aim for the skies at whatever we do – from helping businesses understand their true potential to magnifying
                        their profits. We strive to deeply discern our clients’ needs and utilize our intuitive prowess to provide
                        ingenious formulas for them. We understand our client’s problems as if they were our own and commit to
                        resolving them with constructive results. We hold achievement in high esteem and assist each other to reach
                        their full potential."
                        </p>
                    </div>
                    <div className='col-lg-6'>
                       <h1 style={{color:"white",fontSize:"40px", fontWeight:"700", }}>
                          7 Years of Experience</h1>
                          <p style={{color:"white"}}>We are rethoric question ran over her cheek When she reached the first 
                            hills of the Italic Mountains.
                         </p>
                         <div className='row'>
                            <div className='col-lg-6 text-center'>
                                <div className='experience-column'>
                               <span> <GoCopy style={{fontSize:"40px", textAlign:"center"}}/></span>
                                <h2 style={{marginTop:"7px", color:"white"}}>84</h2>
                                <p className='text-center mt-4' style={{fontWeight:"700", color:"#f5de0feb"}}>% BUSINESS GROWTH</p>
                                </div>
                            </div>
                            <div className='col-lg-6 text-center'>
                            <div className='experience-column'>
                               <span> <PiDatabaseDuotone style={{fontSize:"40px", textAlign:"center"}}/></span>
                                <h2 style={{marginTop:"7px", color:"white"}}>467</h2>
                                <p className='text-center mt-4' style={{fontWeight:"700", color:"#f5de0feb"}}>+ SUCCESSFUL</p>
                                </div>
                                
                            </div>
                            <div className='col-lg-6 text-center'>
                            <div className='experience-column'>
                               <span> <FcHome  style={{fontSize:"40px", textAlign:"center"}}/></span>
                                <h2 style={{marginTop:"7px", color:"white"}}>2435</h2>
                                <p className='text-center mt-4' style={{fontWeight:"700", color:"#f5de0feb"}}>+ CASES COMPLETED</p>
                                </div>
                        
                            </div>
                            <div className='col-lg-6 text-center'>
                            <div className='experience-column'>
                               <span> <PiHandshakeBold  style={{fontSize:"40px", textAlign:"center"}}/></span>
                                <h2 style={{marginTop:"7px", color:"white"}}>139</h2>
                                <p className='text-center mt-4' style={{fontWeight:"700", color:"#f5de0feb"}}>+ RUNNING PROJECTS</p>
                                </div>
                        
                                
                            </div>
                         </div>
                    </div>
                </div>

        </>
    )
}

export default Experience

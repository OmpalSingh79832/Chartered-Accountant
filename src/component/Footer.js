import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6"
import { BsInstagram } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa6"
import { IoLogoYoutube } from "react-icons/io5"
import {AiFillCaretRight} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
import {BsTelephoneFill} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {TfiHeadphoneAlt} from "react-icons/tfi"
function Footer() {
    return (
        <div className='section-footer'>
 {/* <TfiHeadphoneAlt /> */}
 <div class="row-up " style={{marginTop:"90px"}}>
       <div class="column">
       {/* <TfiHeadphoneAlt /> */}
       <div >
        <TfiHeadphoneAlt className='headphone'/>
       </div>
       <div>
        <h5>CALL US NOW</h5>
        <h3>+91-9870525656</h3>
       </div>
       </div>
    <div class="column footer-subscribe">
    <button className='subscribe-now-btn'>SUBSCRIBE NOW</button>
        <input type='Email' className='footer-input'  placeholder='Enter Your Email '/>
    </div>
  </div>
  <div className='div-hr'>
    <hr  className='hr-line'/>
    </div>
   
            <div className='row '>

                <div className='col-lg-3 '>
                    <div className='line-blue1'>
                        <h4 className='helprr'>About CharteredHelp</h4>
                    </div>
                    <div className='helpt'>
                        <span>Chartered Help is a group of Professionals who are helping Start-ups
                            and other small & medium sized business owners in starting, managing and growing
                            their business with 100% compliance of Law.
                        </span>
                    </div>
                    <div className='p-3'>
                        <FaSquareFacebook className='icons c-p' />
                        <BsInstagram  className='icons c-p'/>
                        <FaTwitter className='icons c-p'/>
                        <IoLogoYoutube className='icons c-p'/>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='line-blue'>
                        <h4 className='help'> Services</h4>
                    </div>
                  
                    <span className='c-p'>
                    <AiFillCaretRight  /> Proprietorship Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight />  Partnership Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight /> Private Limited Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight />Trust/Society Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight /> Shop & Establishment Registration
                    </span> <br />
                  
                </div>
                <div className='col-lg-3'>
                    <div className='line-blue2'>
                        <h4 className='help'>Quick Links</h4>
                    </div>
                 
                    <span className='my-4 c-p' >
                    <AiFillCaretRight /> GST Registration
                    </span> <br />
                    <span className='my-4 c-p'>
                    <AiFillCaretRight />   ITR Filing
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight />   PF Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight />  FSSAI Registration
                    </span> <br />
                    <span className='c-p'>
                    <AiFillCaretRight /> Blog
                    </span>
                    
                </div>
                <div className='col-lg-3'>
                    <div className='line-blue3'>
                        <h4 className='help'>Contact Us</h4>
                    </div>
                    <ul className='mt-4' style={{listStyle:"none",marginLeft:"-38px"}}>
                        <li className='d-flex align-items-center'><p><MdLocationOn className='location'/></p>
                        <p className='ms-2'> A-44, Sector-02, Noida-201301 (Dehli/NCR) </p></li>
                        <li className='d-flex'> <p> <BsTelephoneFill /></p>
                        <p className='ms-2 c-p'>+91-120 415 8051</p></li>
                        <li className='d-flex'> <p> <HiOutlineMail /></p>
                        <p className='ms-2 c-p'> info@mayawebtech.Com</p></li>
                        </ul>                     
                    
                </div>
            </div>
        </div>


    )
}

export default Footer
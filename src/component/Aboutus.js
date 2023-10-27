import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import Buss0 from "../img/buss0.webp"
import Buss00 from "../img/buss00.webp"
function Aboutus() {
  return (
    <div className='section my-4'>
    <div className='container'>

    <div className='row'>
       
    <div className='col-lg-6 about-us-img' >
   {/* <img src={Buss} alt='' style={{width:"500px",height:"100%"}}/> */}
   <img src={Buss0} alt='' style={{height:"500px", width:"500px", marginLeft:"-45px",}}  className='rounded' />
   <img src={Buss00} alt='' style={{height:"300px", width:"250px", marginRight:"65px" }} className='rounded about-us-img2' />
    </div>
    <div className='col-lg-6'>
    <div className='site-heading '>
     <span className='site-title-tagline'>
     <h5>ABOUT US</h5>
     <h2>Chartered Help</h2>
     </span>
    </div>
    <p>Another key factor in running a business is CA consultant in Noida. Tax matters of all kinds, GST conformities, are resolved by your CA. We have the best ITR filing consultant in Noida, whose solution will help you to stay safe from any kind of Income-tax matter. We uphold high ethical standards with long-term experience and never distrust you. Therefore, honesty is something we always believe in long-lasting partnerships with our customers. Chartered Accountant in Noida ensures transparency in communication, service and cost. The high standard is preserved by our specialist experts. We deliver financial and legal end-to-end services under one roof. We save your time and energy and bringing synergy between different roles, with a wide range of CA in Noida, company secretaries, lawyers and other advisors onboard. you can file all your tax returns by yourself. One shouldn't wait until 
    the final minute for the CA for ITR filing to get estimates with some legal practitioners.</p>
    <button className='button-more' >READ MORE
       <BsArrowRight className='arrow'/>
    </button>
    </div>
       
    
    </div>
</div>
</div>
  )
}

export default Aboutus
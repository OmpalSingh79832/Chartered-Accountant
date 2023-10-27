import React from 'react'
import Registration from "../img/registration.png"
import Gst from "../img/gst.jpeg"
import Itr from "../img/itr.png"
import Ngo from "../img/ngo.jpeg"
import Trade from "../img/trade.png"
import Pf from "../img/pf.jpeg"
import Account from "../img/account.png"
import Audit from "../img/audit.jpeg"
function Services() {
    return (
        <>
        <div className='services'>
            <div className='service ' style={{padding:"1px", marginTop:"80px"}}>
                <p style={{ textAlign: "center", marginTop: "56px", fontWeight:'700', color:'blue', marginBottom:"40px" }}>OUR SERVICES</p>
                <h4 style={{ textAlign: "center",  fontWeight:'800'}}><span style={{color:'#2323d2'}}>What</span> <span style={{color:'orange'}}>We Do</span> </h4>
                <div class="row mx-3" style={{marginTop:"31px"}}>

                    <div class="col-lg-3  ">
                        <div className='mx-2 shadow bg-white our-service-column rounded p-4'>
                        <img src={Registration} alt='' className='service-icon' />
                        <h5 className='company-service'>Company Registration</h5>
                        <p className='service-para' >There are many types of company registration in India. What type of company
                            registration is best, in your case, is one of the most important.</p>
                        <button style={{marginTop:'20px'}}  className='registration-button'>READ MORE</button>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Gst} alt='' className='service-icon' />
                        <h5 className='company-service'>GST Registration</h5>
                        <p className='service-para' >GST (Goods & services tax), value-added tax imposed on most
                            of the goods and services which is sold for the domestic consumption.</p>
                        <button style={{marginTop:'45px'}} className='registration-button'>READ MORE</button>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Itr} alt='' className='service-icon' />
                        <h5 className='company-service'>ITR Filing</h5>
                        <p className='service-para' >ITR filing for businessperson is 
                        mandatory by which a business report its income and expenditure to the IT dept. Every business.</p>
                        <button style={{marginTop:'20px'}} className='registration-button'>READ MORE</button>
                        </div>
                    
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Ngo} alt='' className='service-icon' />
                        <h5 className='company-service'>Trust/NGO Registration</h5>
                        <p className='service-para' >rust are the non-profit organisations in India, which is registered as trusts, 
                        society and private limited companies mentioned under section 8 act.</p>
                        <button style={{marginTop:'0px'}} className='registration-button'>READ MORE</button>
                        </div>
                     </div>
                </div>
            </div> <div className='service '>
                
                <div class="row mx-3 mt-5 " >

                    <div class="col-lg-3  ">
                        <div className='mx-2 sha our-service-columndow bg-white  rounded p-4'>
                        <img src={Trade} alt='' className='service-icon' />
                        <h5 className='company-service'>Trademark Registration</h5>
                        <p className='service-para' >A trademark is mark or a visual symbol which used for the symbolizing a word, name, 
                        label or brand in order to distinguish between the goods and services in the market.</p>
                        <button className='registration-button'>READ MORE</button>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Pf} alt='' className='service-icon' />
                        <h5 className='company-service'>PF Registration</h5>
                        <p className='service-para' >Employee provident fund is considered as an employee benefit
                         provided as per the scheme under the Employees’ Provident Funds and Miscellaneous Provisions Act.</p>
                        <button style={{marginTop:'20px'}} className='registration-button'>READ MORE</button>
                        </div>
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Account} alt='' className='service-icon' />
                        <h5 className='company-service'>Accounting Services</h5>
                        <p className='service-para' >Accounting is one of the most important tasks in an organisation. It is important 
                        because all the financial statements and other compliances are filed based.</p>
                        <button style={{marginTop:'45px'}} className='registration-button'>READ MORE</button>
                        </div>
                    
                    </div>
                    <div class="col-lg-3 ">
                    <div className='mx-2 shadow our-service-column bg-white  rounded p-4'>
                        <img src={Audit} alt='' className='service-icon' />
                        <h5 className='company-service'>Auditing Services</h5>
                        <p className='service-para' >There are many types of audit which is mandatory for companies, if their turnover/gross
                         receipts exceeds a specific limit e.g. Tax Audit, GST Audit, Statutory Audit etc.</p>
                        <button style={{marginTop:'45px'}} className='registration-button'>READ MORE</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services


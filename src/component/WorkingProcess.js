import React from 'react'
import Working1 from "../img/working1.webp"
import Working2 from "../img/working2.webp"
import Working3 from "../img/working3.jpeg"
import Working4 from "../img/working4.jpeg"


function WorkingProcess() {
  return (
    <>  
       <div className='service ' style={{padding:"1px"}}>
       <p style={{ textAlign: "center", marginTop: "56px", fontWeight:'',fontSize:"20px", color:'blue', marginBottom:"40px" }}>WORKING PROCESS</p>
                <h2 style={{ textAlign: "center",  fontWeight:'800', marginBottom: "60px"}}><span style={{color:'#2323d2'}}>How It</span> <span style={{color:'orange'}}>Works</span> </h2>
               
       </div>
      <div className='container'>
      
      <div className='row justify-content-between my-4'>
      <div className='col-lg-3 col-md-6 text-center'>
          <div className='process-single'>
            <div className='icone'>
              <span>01</span>
              <img src={Working1} alt='' className='' />
            </div>
            <h5 className='' style={{fontWeight:"bold"}}>DETAIL DISCUSSION</h5>
          </div>
        </div> <div className='col-lg-3 col-md-6 text-center'>
          <div className='process-single'>
            <div className='icone'>
              <span>02</span>
              <img src={Working2} alt='' className='' />
            </div>
            <h5 className='' style={{fontWeight:"bold"}}>DOCUMENTS RECEIVED</h5>
          </div>
        </div> <div className='col-lg-3 col-md-6 text-center'>
          <div className='process-single'>
            <div className='icone'>
              <span>03</span>
              <img src={Working3} alt='' className='' />
            </div>
            <h5 className='' style={{fontWeight:"bold"}}>PAYMENT RECEIVED</h5>
          </div>
        </div> <div className='col-lg-3 col-md-6 text-center'>
          <div className='process-single'>
            <div className='icone'>
              <span>04</span>
              <img src={Working4} alt='' className='' />
            </div>
            <h5 className='' style={{fontWeight:"bold"}}>JOB DONE</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WorkingProcess
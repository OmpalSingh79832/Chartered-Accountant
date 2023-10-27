import React from 'react'
import {BiSolidUpArrowCircle} from "react-icons/bi"
function NavLast() {
    return (
      
        <div className='section'>

            <div className='d-flex justify-content-between bg-blue'>

                <div className=''>
                &copy; Copyright 2023 <span style={{color:"orange"}}>CharteredHelp</span> All Rights Reserved.
                </div>
              
                <div className=''>
               <ul className='d-flex' style={{listStyle:"none", marginRight:"-300px"}}>
                <li className='px-2 condition '> Privacy Policy</li>
                <li className='px-2 condition '> Terms & Condition </li>
                <li className='px-2 condition '>Investors</li>
                <li className='px-2 condition '>Legals</li>
               </ul>
                </div>
            <BiSolidUpArrowCircle className=' icons c-p' style={{backgroundColor:"blue", marginRight:"40px"}}/>
            </div>
        </div>
    )
}

export default NavLast
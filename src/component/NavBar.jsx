import Logo from "../img/logo.png"
import React from 'react';
import './NavBar.css'; 
import Carasoul from "./Carasoul";

function NavBar() {
  return (
    <>
    <nav className="navbar" >
    <div  >
      <ul className="nav-list">
        <li className="nav-item">About Us</li>
        <li className="nav-item dropdown">
          <span className="dropdown-text">Company Registration</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">PROPRIETORSHIP REGISTRATION</li>
            <li className="dropdown-item">PARTNERSHIP REGISTRATION</li>
            <li className="dropdown-item">LIMITED LIABILITY PARTNERSHIP</li>
            <li className="dropdown-item">ONE PERSON COMPANY REGISTRATION</li>
            <li className="dropdown-item">PRIVATE LIMITED REGISTRATION</li>
            <li className="dropdown-item">PUBLIC LIMITED REGISTRATION</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="dropdown-text">GST Registration</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">GST CONSULTANT</li>
            <li className="dropdown-item">GST RETURN FILING</li>
            <li className="dropdown-item">GST ANNUAL RETURN FILING</li>
            <li className="dropdown-item">GST LUT FILING</li>
            <li className="dropdown-item">GST REGISTRATION CANCELLATION</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="dropdown-text">ITR Filing</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">ITR FILING-SALARIED PERSON</li>
            <li className="dropdown-item">ITR FILING-BUSINESSMAN</li>
            <li className="dropdown-item">TAX AUDIT</li>
          </ul>
        </li>
    
        <li className="nav-item dropdown">
          <span className="dropdown-text">Other Registration</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">PF REGISTRATION</li>
            <li className="dropdown-item">ESI REGISTRATION</li>
            <li className="dropdown-item">PF RETURN FILING</li>
            <li className="dropdown-item">ESI RETURN FILING</li>
            <li className="dropdown-item">TRADEMARK REGISTRATION</li>
            <li className="dropdown-item">MSME REGISTRATION</li>
            <li className="dropdown-item">TRUST REGISTRATION</li>
            <li className="dropdown-item">SHOP & ESTABLISHMENT REGISTRATION</li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="dropdown-text">Other Services</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">NAME CHANGE</li>
            <li className="dropdown-item">REGISTERED OFFICE CHANGE</li>
            <li className="dropdown-item">ADD DIRECTOR</li>
            <li className="dropdown-item">REMOVE DIRECTOR</li>
            <li className="dropdown-item">MOA AMENDMENT</li>
            <li className="dropdown-item">CLOSURE OF COMPANY</li>
            <li className="dropdown-item">CLOSURE OF LLP</li>
          </ul>
        </li>
        <li className="nav-item">Contact</li>
      </ul>
      </div>
      <img src={Logo} alt="" style={{width:"70px", height:"70px", marginTop:"15px", marginRight:"50px" }} />
    </nav>
    <Carasoul />
    </>
  );
}

export default NavBar;

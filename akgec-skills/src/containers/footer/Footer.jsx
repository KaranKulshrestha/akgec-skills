import React from 'react'
import logo from "../../assets/main.svg"
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Ajay Kumar Garg Engineering College, <br /> <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Address</h4>
        <h2>27th Km Stone, Delhi-Hapur Bypass Road, P.O. Adhyatmik Nagar, Ghaziabad - 201009</h2>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <h2>FabLAB - AKGEC</h2>
        <h2>AKGEC Skills Foundation </h2>
        <h2>https://akgecskills.in/ </h2>
        <h2>fablab@akgec.ac.in </h2>
        <h2>+91 9873812070</h2>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@AKGEC & KaranKulshrestha. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
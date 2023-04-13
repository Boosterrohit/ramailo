import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Bhaktapur - Radhe Radhe</p>
                        <p>Nepal</p>
                    </div>
                </div>
<div className="phone">
<h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
9811111111
</h4>
</div>
<div className="Email">
<h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
rohit@ramailo.tech
</h4>
</div>


            </div>

            <div className="right">
                <h4>About the Company</h4>
                <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph.</p>
                <div className="social">
                <FaFacebook size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaInstagram size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
            </div>
         
        </div>
        <p style={{textAlign:"center", paddingTop:"35px", paddingBottom:"35px"}}>Rohit@copyright.Love From Rohit</p>
    </div>
  )
}

export default Footer
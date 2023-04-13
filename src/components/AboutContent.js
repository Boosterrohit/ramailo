import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import a1 from "../asset/a1.png";
import a4 from "../asset/a4.jpg";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>Who Am I?</h1>
<p>I am a font-end Developer.I create responsive secure website for my client.</p>
<Link to="/contact">
    <button className="btn">CONTACT</button>
</Link>
        </div>


        <div className="right">
<div className="img-container">
    <div className="img-stick top">
        <img src={a1} className="img" alt="" />
    </div>
    <div className="img-stick bottom">
        <img src={a4} style={{width: "320px"}} className="img" alt="" />
    </div>
</div>
        </div>
    </div>
  )
}

export default AboutContent
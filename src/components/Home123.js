import { Link } from "react-router-dom";
import "./Home123Styles.css";

import React from 'react'

const Home123 = () => {
  return (
    <div className="rohit">
        <div className="hest">
            <h1>Knowledge About Programming.</h1>
            <p className="rr">Programming is the process of creating computer software, applications, and systems using a specialized language or code. Programmers write instructions that the computer can understand and execute, allowing it to perform specific tasks or operations. Programming languages range from high-level languages like Python, Java, and C++, which offer more abstract, human-readable code, to low-level languages like Assembly, which provide more direct control over the computer's hardware. Programmers use a variety of tools and resources to write, test, and debug their code, including integrated development environments (IDEs), version control systems, and online communities and forums. With the increasing role of technology in modern society, programming has become an increasingly valuable skill in many industries, including software development, finance, healthcare, and more.</p>
        <Link to="/about" style={{textAlign:"center"}}><button className="btn">About</button></Link>
        </div>
    </div>
  )
}

export default Home123
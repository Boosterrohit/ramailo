import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label style={{color:"white", marginBottom:"0.5rem"}}>Your Name</label>
            <input type="text"></input>
            <label style={{color:"white", marginBottom:"0.5rem"}}>Your Email</label>
            <input type="email"></input>
            <label style={{color:"white", marginBottom:"0.5rem"}}>Subject</label>
            <input type="text"></input>
            <label style={{color:"white", marginBottom:"0.5rem"}}>Message</label>
            <textarea rows={6} placeholder="Write your messgae Here?"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
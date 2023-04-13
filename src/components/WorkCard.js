import "./WorkCardStyles.css";

import React from 'react'
import a1 from "../asset/a1.png";
import a2 from "../asset/a2.png";
import a4 from "../asset/a4.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Our Projects</h1>
        <div  className="project-container">
            <div className="project-card">
                <img src={a1} alt="Project" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>the original words and form of a written or printed work. (2) : an edited or emended copy of an original work. : a work containing such text. : the main body of printed or written matter on a page.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={a2} alt="Project" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>the original words and form of a written or printed work. (2) : an edited or emended copy of an original work. : a work containing such text. : the main body of printed or written matter on a page.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={a4     } alt="Project" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>the original words and form of a written or printed work. (2) : an edited or emended copy of an original work. : a work containing such text. : the main body of printed or written matter on a page.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
import "./CyberWorkCardStyles.css";
import React from 'react';
import "./CyberWorkCardData"
import {NavLink} from "react-router-dom";

export const CyberWorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="Portfolio Website" />
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                    <p>
                    {props.desc}
                    </p>
                    <div className="pro-btns">
                        <NavLink to = {props.view} className = "btn" target="_blank">View</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default CyberWorkCard;
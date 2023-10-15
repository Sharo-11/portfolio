import React from 'react';
import CyberWorkCard from "./CyberWorkCard";
import CyberWorkCardData from './CyberWorkCardData';
import "./CyberWorkCardStyles.css";

const CyberWork = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {CyberWorkCardData.map((val, ind) => {
                return(
                    <CyberWorkCard 
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    desc = {val.desc}
                    view = {val.view}
                    source = {val.source}
                    />
                )
            } )}
        </div>
    </div>
  )
}

export default CyberWork;

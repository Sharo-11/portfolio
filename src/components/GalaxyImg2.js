import "./GalaxyImg2Styles.css";
import React, { Component } from 'react';
import Galaxy2 from "../assets/lap_gal.jpg"

class GalaxyImg2 extends Component {
    render(){
        return (
            <div className="galaxy2">
                <div className="mask2">
                    <img className="intro-bg2" src = {Galaxy2} alt="Galaxy2" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );
        }
              
    }
  
export default GalaxyImg2;

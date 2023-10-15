import "./GalaxyImg3Styles.css";
import React, { Component } from 'react';
import Galaxy3 from "../assets/all_gadgets.jpg"

class GalaxyImg3 extends Component {
    render(){
        return (
            <div className="galaxy3">
                <div className="mask3">
                    <img className="intro-bg3" src = {Galaxy3} alt="Galaxy3" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );
        }
              
    }
  
export default GalaxyImg3;

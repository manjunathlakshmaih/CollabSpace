import {useState} from "react";
import './Heading.css';
import icon from '../Assets/picture.png';

const Heading = ({onLoginClick}) => {
  
  return (
    <div className="heading">
      <div className="logo-container">
        <img src={icon} alt="logo" className="logo" />
        <h1>Collab Space</h1>
      </div>
      <button onClick={onLoginClick}>Login</button>
    </div> 
  )
}

export default Heading;
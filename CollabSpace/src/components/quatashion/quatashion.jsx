import React from "react";
import icon from '../Assets/icon.png';
import "./quatashion.css";

const Quatashion = () => {
  return (
    <div className="quatashion">
      <div className="icon">
        <img src={icon} alt="icon" className="quatashion-icon" />
      </div>
      <p>
        Great things are never done by one person; they are done by a team of
        people. With CollabSpace, you can bring all your great minds together in
        one place. Sign in to join the conversation, unlock your team's full
        potential, and create something truly remarkable.
      </p>
    </div>
  );
};
export default Quatashion;

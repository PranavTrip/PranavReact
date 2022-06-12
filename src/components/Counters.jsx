import React from "react";
import "../assets/css/Counters.css";
import Count from "./Count";

function Counters() {
  return (
    <>
      <div className="counters-main">
        <div className="works-completed">
          <span className="counters-circle">
            <i className="fa-solid fa-check"></i>
          </span>
          <h3 className="works-number">{<Count number="20" duration="10"/>}</h3>
          <p className="works-heading">Works Completed</p>
        </div>
        <div className="experience">
          <span className="counters-circle">
            <i className="fa-solid fa-calendar"></i>
          </span>
          <h3 className="experience-number">{<Count number="01" duration="10"/>}</h3>
          <p className="experience-heading">Years Of Experience</p>
        </div>
        <div className="clients">
          <span className="counters-circle">
            <i className="fa-solid fa-users"></i>
          </span>
          <h3 className="clients-number">{<Count number="05" duration="10"/>}</h3>
          <p className="clients-heading">Total Clients</p>
        </div>
        <div className="hackathons">
          <span className="counters-circle">
            <i className="fa-solid fa-medal"></i>
          </span>
          <h3 className="hackathons-number">{<Count number="05" duration="10"/>}</h3>
          <p className="hackathons-heading">Hackathons</p>
        </div>
      </div>
    </>
  );
}

export default Counters;

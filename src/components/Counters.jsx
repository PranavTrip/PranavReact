import React from "react";
import "../assets/css/Counters.css";

function Counters() {
  return (
    <>
      <div className="counters-main">
        <div className="works-completed">
          <span className="counters-circle">
            <i class="fa-solid fa-check"></i>
          </span>
          <h3 className="works-number">20</h3>
          <p className="works-heading">Works Completed</p>
        </div>
        <div className="experience">
          <span className="counters-circle">
            <i class="fa-solid fa-calendar"></i>
          </span>
          <h3 className="experience-number">1</h3>
          <p className="experience-heading">Years Of Experience</p>
        </div>
        <div className="clients">
          <span className="counters-circle">
            <i class="fa-solid fa-users"></i>
          </span>
          <h3 className="clients-number">3</h3>
          <p className="clients-heading">Total Clients</p>
        </div>
        <div className="hackathons">
          <span className="counters-circle">
            <i class="fa-solid fa-medal"></i>
          </span>
          <h3 className="hackathons-number">5</h3>
          <p className="hackathons-heading">Hackathons</p>
        </div>
      </div>
    </>
  );
}

export default Counters;

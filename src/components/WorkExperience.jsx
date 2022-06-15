import React from "react";
import workExperience from "../assets/data/workexperience";
import "../assets/css/WorkExperience.css";

function WorkExperience() {
  return (
    <>
      <div className="work-container">
        <div className="work-headings">
          <h2 className="work-p-heading">Work Experience</h2>
          <p className="work-s-heading">My Work Experiences</p>
        </div>
        <div className="work-underline"></div>
        <div className="work-description">
          {workExperience.map((element) => {
            return (
              <div className="work-card" key={element.id}>
                <div className="work-card-image">
                  <img src={element.image} alt="company-logo" className="company-image img-fluid"/>
                </div>
                <div className="work-card-tag">
                  <p>{element.position}</p>
                </div>
                <div className="work-card-data">
                  <h4 className="company-name-heading"><a href={element.link} >{element.companyName}</a></h4>
                  <p className="company-description">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;

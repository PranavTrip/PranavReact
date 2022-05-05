import React from "react";
import "../assets/css/Services.css";
import services from "../assets/data/services";

function Services() {
  return (
    <>
      <div className="services">
        <div className="service-main-heading">
          <h1 className="heading">Services</h1>
          <p className="heading-description">
            You can reach me out for the following works
          </p>
          <div className="services-underline"></div>
        </div>
        <div className="services-container row">

          {services.map((element)=>{
            return(
              <div className="service-card col-md-3" key={element.id}>
                <div className="service-image-container">
                  <img src={element.image} alt="service-image" className="service-image" />
                </div>
                <div className="service-description-container">
                  <h3 className="service-heading">{element.heading}</h3>
                  <p className="service-description">{element.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Services;

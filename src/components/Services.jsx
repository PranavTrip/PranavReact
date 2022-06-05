import React from "react";
import "../assets/css/Services.css";
import services from "../assets/data/services";
const Services = () => {
  return (
    <>
      <section id="service" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  You can reach me out for following works:
                </p>
                <div className="service-underline"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((element) => {
              return (
                <div className="col-md-4 service-outer-box" key={element.id}>
                  <div className="service-box">
                    <div className="service-ico">
                      <span className="ico-circle">
                        <img
                          src={element.image}
                          alt="service"
                          className="service-icon img-fluid"
                        />
                      </span>
                    </div>
                    <div className="service-content">
                      <h2 className="s-title text-center">{element.heading}</h2>
                      <p className="s-description text-center">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import React from "react";
import "../assets/css/Services.css";

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
        <div className="service-card-container">
          <div className="card-outer">
            <div className="card-icon">
              <i class="fa-solid fa-tv"></i>
            </div>
            <div className="card-heading">WEB DESIGN</div>
            <div className="card-description">
              Web Designing consists of HTML, CSS, JS and I have a good command
              over these languages and their frameworks like BootStrap, Tailwind
              CSS and many more.
            </div>
          </div>
        </div>
        <div className="service-card-container">
          <div className="card-outer">
            <div className="card-icon">
              <i class="fa-solid fa-tv"></i>
            </div>
            <div className="card-heading">WEB DESIGN</div>
            <div className="card-description">
              Web Designing consists of HTML, CSS, JS and I have a good command
              over these languages and their frameworks like BootStrap, Tailwind
              CSS and many more.
            </div>
          </div>
        </div>
        <div className="service-card-container">
          <div className="card-outer">
            <div className="card-icon">
              <i class="fa-solid fa-tv"></i>
            </div>
            <div className="card-heading">WEB DESIGN</div>
            <div className="card-description">
              Web Designing consists of HTML, CSS, JS and I have a good command
              over these languages and their frameworks like BootStrap, Tailwind
              CSS and many more.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

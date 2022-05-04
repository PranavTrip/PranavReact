import React from "react";
import "../assets/css/About.css";
import ProgressBar from "./ProgressBar";
import skills from "../assets/data/skills";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="row">
          <div className="col-md-6">
            <div className="topmost-left">
              <div className="row">
                <div className="col-md-5 about-img-container">
                  <img
                    className="about-img img-fluid"
                    src="/images/about.jpg"
                    alt="about"
                  />
                </div>
                <div className="col-md-7">
                  <div className="about-info">
                    <p>
                      <span className="title">Name: </span>
                      <span>Pranav Tripathi</span>
                    </p>
                    <p>
                      <span className="title">Email: </span>
                      <span>pranavtri00@gmail.com</span>
                    </p>
                    <p>
                      <span className="title">Phone: </span>
                      <span>(+91)7985697467</span>
                    </p>
                    <p>
                      <span className="title">Resume: </span>
                      <span>Download</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottommost-left">
              <p className="skill-heading">Skills</p>
              {skills.map((element) => {
                return (
                  <div className="progress-bars" key={element.id}>
                    <div className="progress-text">
                      <span>{element.name}</span>
                      <span>{element.progress}%</span>
                    </div>
                    <ProgressBar
                      bgcolor="#0078ff"
                      progress={element.progress}
                      height={10}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="title-box">
              <h3 className="right-heading">About Me</h3>
            </div>
            <div className="about-underline"></div>
            <div className="right-text">
              <p className="about-text">
                Hello there! I am Pranav Tripathi, a pre-final student at
                SRMIST, Chennai. I am an aspiring Web Developer and a Web
                designer as well. Blogging and content-writing are my part-time
                hobbies.
              </p>
              <p className="about-text">
                I am a MERN Stack Developer and a Programmer. I am currently
                brushing-up my Java skills and trying to learn some new
                technologies.
              </p>
              <p className="about-text">
                Programming is also one of my primary works and I code in Java
                language and currently learning Data Structures.
              </p>
              <p className="about-text">
                I write blogs on various technical topics and try my best to
                help the people who read my blogs.
              </p>
              <p className="about-text">
                I love to solve problems on LeetCode and I am preparing for
                technical interviews by solving problems on this platform. Check
                out my <a href="https://leetcode.com/pranavtrip/" target="_blank">LeetCode Profile</a>
              </p>
              <p className="about-text">
                Looking forward to learn various new technologies and languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

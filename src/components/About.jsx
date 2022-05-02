import React from "react";
import "../assets/css/About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <div className="topmost-left">
              <div className="about-img">
                <img src="/images/about.jpg" alt="about" />
              </div>
              <div className="about-decription">
                <p>
                  <strong>Name:</strong> Pranav Tripathi
                </p>
                <p>
                  <strong>Email:</strong> pranavtri00@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> (+91)7985697467
                </p>
                <p>
                  <strong>Resume:</strong> <a href="/">Download</a>
                </p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <h3 className="main-heading">About Me</h3>
            <div className="underline"></div>
            <p>
              <p className="about-content">
                Hello there! I am Pranav Tripathi, a pre-final student at
                SRMIST, Chennai. I am an aspiring Web Developer and a Web
                designer as well. Blogging and content-writing are my part-time
                hobbies.
              </p>
              <p className="about-content">
                I am a MERN Stack Developer and a Programmer. I am currently
                brushing-up my Java skills and trying to learn some new
                technologies.
              </p>

              <p className="about-content">
                Programming is one of my primary works and I code in Java
                language and currently learning Data Structures.
              </p>
              <p className="about-content">
                I write blogs on various technical topics and try my best to
                help the people who read my blogs.
              </p>
              <p className="about-content">
                I love to solve problems on LeetCode and I am preparing for
                technical interviews by solving problems on this platform. Check
                out my{" "}
                <a href="https://leetcode.com/pranavtrip/" target="_blank">
                  LeetCode Profile
                </a>{" "}
                here.
              </p>
              <p className="about-content">
                Looking forward to learn various new technologies and languages
                and enhance my technical skills.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

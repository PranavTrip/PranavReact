import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import "../assets/css/Footer.css";
import { addDoc, collection } from "firebase/firestore";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    const docRef=await addDoc(collection(db,"contact"),{
        name:name,
        email:email,
        number:number,
        message:message
    });
    console.log("Data added successfully with ID: ",docRef.id);
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");

  };

  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-left-side">
            <div className="footer-left-heading">
              <h6 className="hire-me">Hire Me</h6>
              <div className="hire-me-underline"></div>
            </div>
            <div className="footer-left-form">
              <form onSubmit={handleSubmit}>
                <div className="form-main-component">
                  <div className="form-content">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-content">
                    <label>Your Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-content">
                    <label>Contact Number</label>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-content">
                    <label>Your Message</label>
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="footer-right-side">
            <div className="footer-right-heading">
              <h6 className="get-in-touch">Get In Touch</h6>
              <div className="get-in-touch-underline"></div>
            </div>
            <div className="footer-right-description">
              <p className="contact-description">
                Connect with me on various social media platforms and
                collaborate with me on different projects and hackathons.
              </p>
              <div className="contact-icons">
                <p className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  Kanpur(208027), Uttar Pradesh
                </p>
                <p className="phone">
                  <i className="fa-solid fa-phone"></i>
                  (+91) 7985697467
                </p>
                <p className="message">
                  <i className="fa-solid fa-envelope"></i>
                  pranavtri00@gmail.com
                </p>
              </div>
              <div className="social-icons">
                <span className="icons">
                  <a href="http://github.com/PranavTrip">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span className="icons">
                  <a href="https://twitter.com/wiki_ped_ia">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
                <span className="icons">
                  <a href="https://www.instagram.com/wiki._.ped.ia/">
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                </span>
                <span className="icons">
                  <a href="https://www.linkedin.com/in/pranav-tripathi-999ba0201/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

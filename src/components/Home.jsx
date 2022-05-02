import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "../assets/css/Home.css";
import Navbar from "./Navbar";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer", "Content Writer", "MERN Stack","Web Developer","Web Designer" ],
      startDelay: 350,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-background">
          <h2 className="primary-heading">I am Pranav Tripathi</h2>
          <p className="secondary-heading">
            <span className="secondary-heading" ref={el}></span>
          </p>
        </div>
      </div>
    </>
  );
}

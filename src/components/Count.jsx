import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../assets/css/Count.css";

const Count=props=> {
  const [count, setCount] = useState("0");
  const {number, duration } = props;
  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start == end) return;
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);
  return (
    <>
      <div className="count-container">
        <h3>
          <i>
            {count}
          </i>
        </h3>
      </div>
    </>
  );
}

export default Count;

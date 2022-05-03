import React from "react";

function ProgressBar({ bgcolor, progress, height }) {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "grey",  

    textAlign: "center",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <>
      <div style={Parentdiv}>
        <div style={Childdiv}>
        
          <span style={progresstext}></span>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;

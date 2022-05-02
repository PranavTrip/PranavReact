import React from "react";

function ProgressBar({ bgcolor, progress, height }) {
  const Parentdiv = {
    height: height,
    width: "10%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
    textAlign: "center",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
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
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;

import React from "react";
import "../assets/css/Count.css";

function Count() {
  return (
    <>
      <div className="count-container">
        <div className="row">
          <div className="col-md-3">
            <ion-icon name="checkmark-sharp"></ion-icon>
            20 Works Completed
          </div>
        </div>
      </div>
    </>
  );
}

export default Count;

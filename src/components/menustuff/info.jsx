import React from "react";
import "../../App.css";

const styling = {
  display: "flex",
  gap: "10%",
  fontSize: "15px",
  textAlign: "start",
};

function info() {
  return (
    <>
      <div className="ContainerForInfo" style={styling}>
        <div className="aboutUs" style={{ flex: 1 }}>
          <h1>Company</h1>
          <p>some text</p>
          <h1>About us</h1>
          <p>some text 2x</p>
          <h1>Careers</h1>
          <p>some text 3x</p>
        </div>
        <div className="learn" style={{ flex: 1 }}>
          <h1>Learn</h1>
          <p>another text</p>
          <h1>Hacking</h1>
          <p>another text 2x</p>
          <h1>programming languages</h1>
          <p>another text 3x</p>
        </div>
      </div>
    </>
  );
}

export default info;

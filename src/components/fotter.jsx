import React from "react";
import "./fotter.css";
// import {Link} from 'react-router-dom';

const footerStyle = {
  display: "flex",
  textAlign: "center",
};

const MainContainer={
  display:"flex",
  width:"100%",
  justifyContent:"space-around",
  flexWrap:"wrap"
}

//main function
function fotter() {
  return (
    <footer className="footer">
      <hr width="90%"/>
      <div style={footerStyle}>
        <div style={MainContainer}>
          <div>
            <h3>Company</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Work Since 1999</p>
          </div>
          <div>
            <h3>Learn</h3>
            <p> Ethnical hacking</p>
            <p> Computers</p>
            <p> Languages</p>
          </div>
          <div>
            <h3>Contacts</h3>

            <p>
              <a
                href="https://github.com/sabrina34352"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </p>
            <p>
              <a href="/#" rel="noreferrer">
                somemail@gmail.com
              </a>
            </p>
            <p>
              <a href="/#" rel="noreferrer">
                +998 99 999 99 99
              </a>
            </p>
          </div>
          <div>
            <h3>Contribute</h3>
            <p>Internship</p>
            <p>
              <a href="/#" rel="noreferrer">
                GoFund.me
              </a>
            </p>
            <p>©sabrina babakulova</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default fotter;

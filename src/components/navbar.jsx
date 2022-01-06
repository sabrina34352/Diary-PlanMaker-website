import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

//main function
function Navbar() {
  return (
    <div id="navbar">
      <p className="headerbtn" href="/#">
        <Link to="/" className="nav-links">
          {" "}
          home{" "}
        </Link>
      </p>
      <p className="headerbtn" href="/#">
        <Link to="/menu" className="nav-links">
          menu
        </Link>
      </p>
      <p className="headerbtn" href="/#">
        {" "}
        <Link to="/plans" className="nav-links">
          {" "}
          plans{" "}
        </Link>
      </p>
      <p className="headerbtn" href="/#">
        {" "}
        <Link to="/profile" className="nav-links">
          {" "}
          profile{" "}
        </Link>
      </p>
      <p className="headerbtn" href="/#">
        {" "}
        <Link to="/signIn" className="nav-links">
          {" "}
          sign in{" "}
        </Link>
      </p>
    </div>
  );
}

export default Navbar;

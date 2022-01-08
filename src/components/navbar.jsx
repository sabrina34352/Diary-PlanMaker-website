import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const MenuItems = [
  {
    title: "home",
    link: "/",
    class: "nav-links",
  },
  {
    title: "menu",
    link: "menu",
    class: "nav-links",
  },
  {
    title: "plans",
    link: "plans",
    class: "nav-links",
  },
  {
    title: "profile",
    link: "profile",
    class: "nav-links",
  },
  {
    title: "register",
    link: "register",
    class: "nav-links",
  },
];

function DesktopMenu() {
  return (
    <div className="HolderForMenu">
      <div id="MenuStuff">
        {MenuItems.map((item, index) => {
          return (
            <button key={index} className={item.class}>
              <Link to={item.link}>{item.title}</Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}



//main function
function Navbar() {
  let [clicked, setClicked] = useState(false);
  return (
    <>
      <div id="navbar">
        <FaUserSecret className="IncognitoLogo" />
        <div className="borgerHolder">
          <button id="borger" onClick={() => setClicked(!clicked)}>
            {" "}
            borgar
          </button>
        </div>

        <DesktopMenu />
        {clicked && (
          <div className="HolderForMenuPhone">
            <div className="MenuStuffPhone">
              {MenuItems.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={item.class}
                    onClick={() => setClicked(!clicked)}
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

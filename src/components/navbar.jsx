import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    title: "home",
    link: "/",
    class: "nav-links",
  },
  {
    title: "menu",
    link: "/menu",
    class: "nav-links",
  },
  {
    title: "plans",
    link: "/plans",
    class: "nav-links",
  },
  {
    title: "profile",
    link: "/profile",
    class: "nav-links",
  },
  {
    title: "sign in",
    link: "/signIn",
    class: "nav-links",
  },
];

const MobileMenu = <button id ="borger"> borgar</button>






//main function
function Navbar() {
  return (
    <div id="navbar">
        {MobileMenu}
      {MenuItems.map((item, index) => {
        return (
          <Link key={index} to={item.link} className={item.class}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;

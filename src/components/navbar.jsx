import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import Profile from "./menustuff/profile";

const MenuItems = [
  {
    title: "home",
    link: "/",
    class: "nav-links",
  },
  {
    title: "cart",
    link: "cart",
    class: "nav-links",
  },
  {
    title: "Info",
    link: "Info",
    class: "nav-links",
  },

  {
    title: "register",
    link: "register",
    class: "nav-links",
  },
];

function DesktopMenu() {
  const ref = useRef();
  const [profileOpened, setprofileOpened] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (profileOpened && ref.current && !ref.current.contains(e.target)) {
        setprofileOpened(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [profileOpened]);

  return (
    <div className="HolderForMenu" ref={ref}>
      <div id="MenuStuff">
        {MenuItems.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <button
                className={item.class}
                onClick={() => {
                  setprofileOpened(false);
                }}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
        <button
          className="nav-links"
          onClick={() => {
            setprofileOpened(!profileOpened);
          }}
        >
          profile
        </button>
      </div>

      {profileOpened && <Profile />}
    </div>
  );
}

//main function
function Navbar() {
  let [clicked, setClicked] = useState(false);
  let [profileClicked, setprofileClicked] = useState(false);
  return (
    <>
      <div id="navbar">
          <FaUserSecret className="IncognitoLogo" />
          <div className="borgerHolder">
            <button
              id="borger"
              onClick={() => {
                setClicked(!clicked);
                setprofileClicked(false);
              }}
            >
              {" "}
              borgar
            </button>
          </div>

          <DesktopMenu />
          {/* MENU FOR PHONES */}
          {clicked && (
            <div className="HolderForMenuPhone">
              <div className="MenuStuffPhone">
                {MenuItems.map((item, index) => {
                  return (
                    <Link to={item.link} key={index}>
                      <button
                        className={item.class}
                        onClick={() => {
                          setClicked(!clicked);
                          setprofileClicked(false);
                        }}
                      >
                        {item.title}
                      </button>
                    </Link>
                  );
                })}
                <button
                  className="nav-links"
                  onClick={() => {
                    setprofileClicked(!profileClicked);
                  }}
                >
                  profile
                </button>
              </div>
              {profileClicked && <Profile />}
            </div>
          )}
        </div>
    </>
  );
}

export default Navbar;

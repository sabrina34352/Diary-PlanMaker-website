import React, { useState } from "react";
import "../../App.css";
import Photo from "../../photos/night-vision-goggles-isolated-on-260nw-31342912.jpg";
import { FaUserSecret } from "react-icons/fa";

const veshiNaProdaju = [
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 0,
  },
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 1,
  },
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 2,
  },
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 3,
  },
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more b Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 4,
  },
  {
    name: "Night Vision Glasses",
    Prize: "500$",
    Description:
      "This is too see in the night and much more b Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: Photo,
    id: 5,
  },
];

const buttonMinimalStyle = {
  border: "none",
  outline: "none",
  background: "none",
  textDecoration: "underline",
};

const Font = {
  fontSize: "20px",
};

function SearchBar() {
  const [searchInfo, setSearchInfo] = useState(" ");
  return (
    <>
      <div className="SearchThings">
        <input
          style={Font}
          type="text"
          id="Searching"
          placeholder="search"
          onChange={(event) => setSearchInfo(event.target.value)}
        />
        <button
          style={Font}
          id="searchButton"
          onClick={() => console.log(searchInfo)}
        >
          {" "}
          Search
        </button>
      </div>
    </>
  );
}

function SellsOfTheMonth() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>Best Sells Of the Month</h1>
        <div className="GridHolderForSelling">
          <div className="GridHolderForVeshi">
            {veshiNaProdaju.slice(0, 4).map((item, index) => {
              return (
                <div key={index} className="GridVeshi" style={Cursor}>
                  <p>{item.name}</p>
                  <p>{item.Prize}</p>
                  <p>
                    {item.Description.slice(0, 100)}
                    <button style={buttonMinimalStyle}>
                      <b>Read More</b>
                    </button>
                  </p>
                  <img src={item.image} alt="Item on sale" />
                </div>
              );
            })}

            {seeMore &&
              veshiNaProdaju
                .slice(3, veshiNaProdaju.length)
                .map((item, index) => {
                  return (
                    <div key={index} className="GridVeshi">
                      <p>{item.name}</p>
                      <p>{item.Prize}</p>
                      <p>
                        {item.Description.slice(0, 100)}
                        <button style={buttonMinimalStyle}>
                          <b>Read More</b>
                        </button>
                      </p>
                      <img src={item.image} alt="Item on sale" />
                    </div>
                  );
                })}
          </div>
          <button className="seeMore" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "see Less" : "see More"}
          </button>
        </div>
      </div>
    </>
  );
}

function Sections() {
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>All sections</h1>
        <div className="HolderForSections">
          <div
            className="GridHolderForVeshi"
            id="SectionsHolderForVeshi"
            style={{ gap: "3em" }}
          >
            {veshiNaProdaju.map((item, index) => {
              return (
                <div
                  key={index}
                  className="GridVeshiSections"
                  style={{
                    border: "5px solid var(--borderColor)",
                    textAlign: " center",
                    padding: "15px",
                    cursor: "pointer",
                  }}
                >
                  <p>{item.name}</p>

                  <img src={item.image} alt="Item on sale" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const Cursor = {
  cursor: "pointer",
};

function CollectionOfStuff() {
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1> Most Searched</h1>
        <div className="HolderForSelling">
          <div className="HolderForVeshi">
            <button
              id="btnLeft"
              className="btnScroll"
              onClick={(event) => {
                event.target.parentElement.scrollBy(
                  -event.target.parentElement.children[1].getBoundingClientRect()
                    .width,
                  0
                );
              }}
            ></button>
            {veshiNaProdaju.map((item, index) => {
              return (
                <div key={index} className="Veshi" style={Cursor}>
                  <p>{item.name}</p>
                  <p>{item.Prize}</p>
                  <p>
                    {item.Description.slice(0, 100)}
                    <button style={buttonMinimalStyle}>
                      <b>Read More</b>
                    </button>
                  </p>
                  <img src={item.image} alt="Item on sale" height="150" />
                </div>
              );
            })}
            <button
              id="btnRight"
              className="btnScroll"
              onClick={(event) => {
                event.target.parentElement.scrollBy(
                  event.target.parentElement.children[1].getBoundingClientRect()
                    .width,
                  0
                );
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

const divStyle = {
  marginTop: "20px",
  textAlign: "end",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "25px",
  color: "var(--fontColor)",
};
function Scrollbtn() {
  return (
    <button
      style={btnStyle}
      className="seeMore"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      scroll to top
    </button>
  );
}

function home() {
  return (
    <>
      <div className="wrapper">
        <SearchBar />
        <h2 className="Welcome">
          <div>
            <b>online shop for hackers </b>
            <FaUserSecret />
          </div>
        </h2>
        <SellsOfTheMonth />
        <CollectionOfStuff />
        <Sections />
        <div style={divStyle}>
          <Scrollbtn />
        </div>
      </div>
    </>
  );
}

export default home;

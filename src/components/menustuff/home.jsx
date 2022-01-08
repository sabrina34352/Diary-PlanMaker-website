import React, { useEffect, useState } from "react";
import "../../App.css";
import Photo from "../../photos/night-vision-goggles-isolated-on-260nw-31342912.jpg";
import { FcNext } from "react-icons/fc";

const welcome = {
  paddingLeft: "2%",
  fontSize: "40px",
  margin: "15px 5% 15px",
};

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

const NextItemButton = {
  position: "absolute",
  display: "inline",
  right: "6%",
  top: "40%",
  padding: "15px",
  border: "2px solid white",
  cursor: "pointer",
};

const SellsOfTheMonthButton = {
  color: "var(--borderColor)",
  padding: "0 20px",
  fontSize: "20px",
  cursor: "pointer",
};

function SearchBar() {
  const [searchInfo, setSearchInfo] = useState(" ");
  return (
    <div>
      <div
        style={{ position: "relative", display: "flex", margin: " 15px 5%" }}
      >
        <input
          type="text"
          id="Searching"
          placeholder="search"
          onChange={(event) => setSearchInfo(event.target.value)}
        />
        <button id="searchButton" onClick={() => console.log(searchInfo)}>
          {" "}
          Search
        </button>
      </div>
    </div>
  );
}

function SellsOfTheMonth() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div style={{ marginTop: "6em" }}>
        <h2 style={welcome}>Best Sells Of the Month</h2>
        <div className="GridHolderForSelling">
          <div className="GridHolderForVeshi">
            {veshiNaProdaju.slice(0, 3).map((item, index) => {
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

            {seeMore &&
              veshiNaProdaju
                .slice(3, veshiNaProdaju.length)
                .map((item, index) => {
                  return (
                    <div key={index} className="GridVeshi" id="Secondary">
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
          <button
            style={SellsOfTheMonthButton}
            onClick={() => setSeeMore(!seeMore)}
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
}

function Sections() {
  return (
    <>
      <div style={{ marginTop: "6em" }}>
        <h1 style={welcome}>All sections</h1>
        <div className="HolderForSections">
          <div className="GridHolderForVeshi">
            {veshiNaProdaju.map((item, index) => {
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
                  <button style={SellsOfTheMonthButton}>See More</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// function Scrolling(sizeOfWindow, elementsSize) {
//   if(sizeOfWindow &&elementsSize){
//     console.log(elementsSize.current.getBoundingClientRect().width)
//   }
// }
// const additionalLine = <p>{item.Description.slice(100, item.Description.length)}</p>

function CollectionOfStuff() {
  // const [width, setWidth] = useState(null);
  // const [InsideWidth, setInsideWidth] = useState(0);
  // const RefForInside = React.createRef();
  // const myRef = React.createRef();

  // useEffect(() => {
  //   if (myRef.current) {
  //     setWidth(myRef);
  //     setInsideWidth(RefForInside);
  //   }

  // }, []);
  return (
    <>
      <div className="HolderForButtonAndMenu">
        <div className="HolderForSelling">
          <div className="HolderForVeshi">
            {veshiNaProdaju.map((item, index) => {
              return (
                <div key={index} className="Veshi">
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
          </div>
        </div>
        <button className="NextItem" style={NextItemButton}>
          {" "}
          <FcNext />{" "}
        </button>
      </div>
    </>
  );
}

function home() {
  return (
    <div className="wrapper">
      <SearchBar />
      <h1 className="Welcome" style={welcome}>
        online market for hackers
      </h1>
      <CollectionOfStuff />
      <SellsOfTheMonth />
      <Sections />
    </div>
  );
}

export default home;

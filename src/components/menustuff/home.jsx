import React, { useState } from "react";
import "../../App.css";
import Photo from "../../photos/night-vision-goggles-isolated-on-260nw-31342912.jpg";
import { FcNext } from "react-icons/fc";

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
    <div>
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
    </div>
  );
}

function SellsOfTheMonth() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div style={{ marginTop: "6em" }}>
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
      <div style={{ marginTop: "6em" }}>
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
      <div style={{ marginTop: "6em" }}>
        <h1> Most Searched</h1>
        <div className="HolderForSelling">
          <div className="HolderForVeshi">
            <button className="NextItem" id="Left">
              <FcNext style={{transform: "rotate(180deg)"}} />
            </button>
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
            <button className="NextItem" id="Right">
              <FcNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function home() {
  return (
    <div className="wrapper" style={{ margin: "5%" }}>
      <SearchBar />
      <h2 className="Welcome">
        <b>online shop for hackers</b>
      </h2>
      <SellsOfTheMonth />
      <CollectionOfStuff />
      <Sections />
    </div>
  );
}

export default home;

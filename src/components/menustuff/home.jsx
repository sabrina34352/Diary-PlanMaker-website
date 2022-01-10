import React, { useState } from "react";
import "../../App.css";
import Photo from "../../photos/night-vision-goggles-isolated-on-260nw-31342912.jpg";
import { FaUserSecret } from "react-icons/fa";

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

const Font = {
  fontSize: "20px",
};

const Cursor = {
  cursor: "pointer",
};

const buttonMinimalStyle = {
  border: "none",
  outline: "none",
  background: "none",
  textDecoration: "underline",
};

const Home = () => {
  const [data, setData] = useState([
    {
      name: "Day Vision Glasses",
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
      name: "Midnight Vision Glasses",
      Prize: "500$",
      Description:
        "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      image: Photo,
      id: 2,
    },
    {
      name: "Afternoon Vision Glasses",
      Prize: "500$",
      Description:
        "This is too see in the night and much more  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      image: Photo,
      id: 3,
    },
    {
      name: "Morning Vision Glasses",
      Prize: "500$",
      Description:
        "This is too see in the night and much more b Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      image: Photo,
      id: 4,
    },
    {
      name: "Lunch Vision Glasses",
      Prize: "500$",
      Description:
        "This is too see in the night and much more b Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      image: Photo,
      id: 5,
    },
  ]);

  const [term, setTerm] = useState("");

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const finalResult = searchEmp(data, term);

  return (
    <>
      <div className="wrapper">
        <SearchBar onUpdateSearch={onUpdateSearch} />
        <h2 className="Welcome">
          <div>
            <b>online shop for hackers </b>
            <FaUserSecret />
          </div>
        </h2>
        <SellsOfTheMonth data={finalResult} />
        <CollectionOfStuff data={finalResult} />
        <Sections data={finalResult} />
        <div style={divStyle}>
          <Scrollbtn />
        </div>
      </div>
    </>
  );
};

function SearchBar(props) {
  const [searchInfo, setSearchInfo] = useState("");

  const searchOnClick = (e) => {
    setSearchInfo(e.target.value);
    props.onUpdateSearch(e.target.value);
  };

  return (
    <>
      <div className="SearchThings">
        <input
          style={Font}
          type="text"
          id="Searching"
          placeholder="search"
          onChange={(e) => searchOnClick(e)}
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
function SellsOfTheMonth(props) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>Best Sells Of the Month</h1>
        <div className="GridHolderForSelling">
          <div className="GridHolderForVeshi">
            {props.data.slice(0, 4).map((item, index) => {
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
              props.data.slice(3, props.data.length).map((item, index) => {
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

function Sections(props) {
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
            {props.data.map((item, index) => {
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

function CollectionOfStuff(props) {
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
            {props.data.map((item, index) => {
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

export default Home;

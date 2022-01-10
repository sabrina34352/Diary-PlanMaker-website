import React from "react";
//CSS SHIT

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 5em)",
  gap: "10px",
  textAlign: "left",
  justifyContent: "center",
};

export var userInfo = {};

//JSX SHIT

const btnStyle = {
  outline: "none",
  backgroundColor: "var(--mainColor)",
  border: "1px solid var(--borderColor)",
  borderRadius: "10px",
  padding: "8px 15px",
  boxShadow: "inset 0 0 1em 0 var(--hoverColor)",
  cursor: "pointer",
};
//main function
function Register() {
  return (
    <>
      <div>
        <div className="holderForSigns">
          <h1>signing IN</h1>
          <div style={style}>
            <p className="ForInput"> Name: </p>
            <input
              type="text"
              id="0"
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
              onChange={(event) => {
                userInfo[0] = event.target.value;
              }}
            />

            <p className="ForInput">Surname:</p>
            <input
              type="1"
              id="UserEmail"
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
              onChange={(event) => {
                userInfo[1] = event.target.value;
              }}
            />
            <p className="ForInput">Age:</p>
            <input
              type="3"
              id="UserEmail"
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
              onChange={(event) => {
                userInfo[2] = event.target.value;
              }}
            />
            <p className="ForInput">Email:</p>
            <input
              type="2"
              id="UserEmail"
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
              onChange={(event) => {
                userInfo[3] = event.target.value;
              }}
            />
          </div>
          <button
            style={btnStyle}
            onClick={() => {
              console.log(userInfo);
            }}
          >
            sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;

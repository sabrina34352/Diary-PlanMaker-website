import React from "react";
//CSS SHIT

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 5em)",
  gap: "10px",
  textAlign: "left",
};

//JSX SHIT

var Input = (
  <input
    type="text"
    id="UserEmail"
    className="ForInput"
    placeholder="Enter Info"
  />
);

//main function
function Register({authorised}) {
  return (
    <>
      <div >
        <div className="holderForSigns">
          <div>
            <h1>signing IN</h1>
            <div style={style}>
              <p className="ForInput"> Name: </p>
              {Input}

              <p className="ForInput">Surname:</p>
              {Input}

              <p className="ForInput">Age:</p>
              {Input}

              <p className="ForInput">Email:</p>
              {Input}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

import React, { useRef } from "react";
import "./register.css";
//CSS SHIT

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 5em)",
  gap: "10px",
  textAlign: "left",
  justifyContent: "center",
};
export var userInfo = [];

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
  const nameRef = useRef();
  const surnameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    userInfo[0] = nameRef.current.value;
    userInfo[1] = surnameRef.current.value;
    userInfo[2] = ageRef.current.value;
    userInfo[3] = emailRef.current.value;
  };
  return (
    <>
      <div className="holderForSigns">
        <form onSubmit={submit}>
          <h1>signing IN</h1>
          <div style={style}>
            <p className="ForInput"> Name: </p>
            <input
              ref={nameRef}
              type="text"
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
            />

            <p className="ForInput">Surname:</p>
            <input
              type="text"
              ref={surnameRef}
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
            />
            <p className="ForInput">Age:</p>
            <input
              type="number"
              ref={ageRef}
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
            />
            <p className="ForInput">Email:</p>
            <input
              type="text"
              ref={emailRef}
              className="ForInput"
              placeholder="Enter Info"
              style={btnStyle}
            />
          </div>
          <button style={btnStyle}>sign in</button>
        </form>
      </div>
    </>
  );
}

export default Register;

import React from 'react'
//CSS SHIT
const forInput = {
    borderRadius: "7px",
    height: "30px"
}

const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "10px",
    gridColumnGap: "10px",
    margin: " 0 3%",
    textAlign: "left",
    maxWidth: "100px"
}

const forButton = {
    display: "flex",
    alignItems: "right",
    margin: "0 auto",
    padding: "5px 30px",
    backgroundColor: "aqua"
}

//JSX SHIT
var nameInput = <input type="text" id="UserName" style = {forInput}placeholder="Enter your name"/>;
var surnameInput = <input type="text" id="UserSurname" style = {forInput}placeholder="Enter your surname"/>;
var ageInput = <input type="number" id="UserAge" style = {forInput}placeholder="Enter your age"/>
var emailInput=<input type="text" id = "UserEmail" style = {forInput}placeholder='Enter Email'/>
var EnterButton = <button style={forButton}> Enter</button>
 
//main function
function Register() {
    return (
        <div>
            <h1>signing IN</h1>
            <div style={style}>  
                <p className = "nandsn" > Name: </p>
                {nameInput}

                <p className="nandsn">Surname:</p>
                {surnameInput}
            
                <p className="nandsn">Age:</p>
                {ageInput}

                
                <p className="nandsn">Email:</p>  
                {emailInput}
            </div>
            {EnterButton}
        </div>
    )
}

export default Register

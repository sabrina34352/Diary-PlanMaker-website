import React from "react";
import "../../App.css";
import { ImCart } from "react-icons/im";

const cartCSS={
    border:"2px solid var(--borderColor)",
    borderRadius:"15px",
    padding:"20px",
    color:"var(--fontColor)",
    boxShadow:"inset 0 0 1em 0 var(--borderColor)",
    fontSize:"20px"
}


function plans() {
  return (
    <>
    <div style={{margin:"5%"}}>
      <h1 className="plans"> {ImCart()} hacker cart </h1>
      <div style={cartCSS}>
          your cart is empty
      </div>
    </div>
    </>
  );
}

export default plans;

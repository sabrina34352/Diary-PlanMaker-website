import React from "react";
import "../../App.css";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

export const cartCSS = {
  border: "2px solid var(--borderColor)",
  borderRadius: "15px",
  padding: "20px",
  color: "var(--fontColor)",
  boxShadow: "inset 0 0 1em 0 var(--borderColor)",
  fontSize: "20px",
  flex: 1,
};

const buttonStyle = {
  borderRadius: "10px",
};

export function Cart() {
  return (
    <>
      <div >
        <h1 className="plans"> {ImCart()} hacker cart </h1>
        <div style={cartCSS}>your cart is empty</div>
        <div className="shopcardInfo">
          <p style={cartCSS}>amount of money spent: 0.00som</p>
          <p style={cartCSS}>number of stuff bought: 0.00som</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={buttonStyle} className="seeMore">
            <Link to="/home" style={{ textDecoration: "none" }}>
              get shopping
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}


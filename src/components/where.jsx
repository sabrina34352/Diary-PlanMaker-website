import React from "react";
import { Link } from "react-router-dom";
import { cartCSS } from "./menustuff/Cart";

function where() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>BITCH WHERE ARE YOU GOING GO BACK HOME</h1>
      <Link to="/home">
        <button style={cartCSS} id="btn">
          go home
        </button>
      </Link>
    </div>
  );
}

export default where;

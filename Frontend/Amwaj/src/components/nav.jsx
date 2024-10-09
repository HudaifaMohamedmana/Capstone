import React from "react";
import LogIn from "./logIn";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/628/609/small_2x/coffee-shop-logo-design-png.png"
            alt=""
          />
          <h2>Amwaj Cafe</h2>
        </div>
      </Link>
      <div className="cartLogo">
        <LogIn />
        <CheckOut />
      </div>
    </div>
  );
}

export default Nav;

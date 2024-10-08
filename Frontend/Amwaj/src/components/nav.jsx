import React from "react";
import LogIn from "./logIn";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <img
            src="https://www.shutterstock.com/image-vector/coffee-cup-logo-design-template-600nw-2180323303.jpg"
            alt=""
          />
          <h2>Amwaj Cafe</h2>
        </div>
      </Link>
      <div className="cart">
        <LogIn />
        <Cart />
      </div>
    </div>
  );
}

export default Nav;

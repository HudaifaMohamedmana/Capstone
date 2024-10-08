import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function LogIn() {
  const { user } = useContext(AppContext);

  const redirectPath = user.email !== "" ? "/Profile" : "/Form";

  return (
    <div className="cart">
      <Link to={redirectPath}>
        <div className="cart">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="User Icon"
          />
        </div>
      </Link>
    </div>
  );
}

export default LogIn;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function LogIn() {
  const { user } = useContext(AppContext);

  const redirectPath = user.email !== "" ? "/Profile" : "/Form";

  return (
    <div className="cartLogo">
      <Link to={redirectPath}>
          <img
            src="https://images.freeimages.com/fic/images/icons/740/made_of_wood/512/user_matte.png"
            alt="User Icon"
          />
      </Link>
    </div>
  );
}

export default LogIn;

import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="cartLogo">
      <Link to="/cart">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/coffee-bag-3d-icon-download-in-png-blend-fbx-gltf-file-formats--beans-package-pack-shop-food-drink-icons-8334148.png"
          alt=""
        />
      </Link>
    </div>
  );
};
export default CheckOut;

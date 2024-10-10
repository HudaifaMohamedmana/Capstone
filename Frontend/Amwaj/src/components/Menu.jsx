import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import ItemFram from "./ItemFram";

import { AppContext } from "../App";

function Menu() {
  const { user, menu, setMenu,orderItem } = useContext(AppContext);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [inStock, setInStock] = useState(true);
  //-------------------------------------------------

  const fetchMenu = async () => {
    try {
      const menu = await axios.get(`http://localhost:3050/menu`);
      // console.log(menu.data.menu);
      setMenu(menu.data.menu);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMenu();
    console.log(orderItem);
  }, []);

  return (
    <div>
      <h1>Hot Drinks</h1>

      <div className="hotDrink">
        {menu.length > 0 ? (
          menu.map((item) =>
            item.type === "hotDrink" ? (
              <ItemFram key={item._id} item={item} fetchMenu={fetchMenu} />
            ) : null
          )
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
      <h1>Cold Drinks</h1>

      <div className="coldDrink">
        {menu.length > 0 ? (
          menu.map((item) =>
            item.type === "coldDrink" ? (
              <ItemFram key={item._id} item={item} fetchMenu={fetchMenu} />
            ) : null
          )
        ) : (
          <p>No menu items available.</p>
        )}
      </div>

      <h1>Sweet</h1>
      <div className="sweet">
        {menu.length > 0 ? (
          menu.map((item) =>
            item.type === "sweet" ? (
              <ItemFram key={item._id} item={item} fetchMenu={fetchMenu} />
            ) : null
          )
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;

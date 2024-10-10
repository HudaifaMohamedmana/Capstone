import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import ItemFram from "./ItemFram";

import { AppContext } from "../App";

function Menu() {
  const { user, menu, setMenu, orderItem, isAdmin } = useContext(AppContext);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imge, setImge] = useState();
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

  const addItem = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3050/menu", {
      type: type,
      name: name,
      price: price,
      imge: imge,
      description: description,
      inStock: inStock,
    });
    setType("");
    setName("");
    setPrice(0);
    setImge("");
    setDescription("");
    setInStock(true);
  };
  const toggleInStock = () => {
    setInStock(!inStock);
  };

  useEffect(() => {
    fetchMenu();
    // console.log(orderItem);
  }, [addItem]);

  return (
    <div>
      {isAdmin && (
        <>
          <h1>Add</h1>
          <div className="center">
            <div className="menuEdit">
              <form onSubmit={addItem}>
                <label>Name: </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />

                <label>Imge Url: </label>
                <input
                  type="url"
                  value={imge}
                  required
                  onChange={(e) => setImge(e.target.value)}
                />
                <br />
                <label>price: </label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <br />
                <label>Description: </label>
                <input
                  type="textbox"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <label>Type: </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="hotDrink">Hot Drink</option>
                  <option value="coldDrink">Cold Drink</option>
                  <option value="sweet">Sweet</option>
                </select>
                <br />
                <label>inStock: </label>
                <input
                  type="checkbox"
                  value={inStock}
                  onChange={(e) => setInStock(e.target.checked)}
                  defaultChecked={true} 
                  required
                />
                <input className="submit" type="submit" value="Add" />
              </form>
            </div>
          </div>
        </>
      )}
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

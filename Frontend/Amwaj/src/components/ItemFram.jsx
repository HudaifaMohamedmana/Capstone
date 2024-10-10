import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";

const ItemFram = ({ item, fetchMenu }) => {
  const [isEdit, setIsEdit] = useState(true);
  const { orderItem, setOrderItem, isAdmin } = useContext(AppContext);
  const [name, setName] = useState(item.name);
  const [imge, setImge] = useState(item.imge);
  const [price, setPrice] = useState(item.price);
  const [type, setType] = useState(item.type);

  const add = () => {
    const newItem = {
      _id: item._id,
      imge: item.imge,
      name: item.name,
      price: item.price,
      quantity: 1,
    };

    const existingItem = orderItem.find((order) => order._id === item._id);

    if (!existingItem) {
      setOrderItem((prevOrderItems) => [...prevOrderItems, newItem]);
    } else {
      setOrderItem((prevOrderItems) =>
        prevOrderItems.map((order) =>
          order._id === item._id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        )
      );
    }
    console.log(orderItem);
  };

  const deleteItem = async () => {
    if (window.confirm("Are you sure you want to delete this Item?")) {
      await axios.delete(`http://localhost:3050/menu/${item._id}`);
      console.log(item.name, " was deleted");
      alert("Item deleted successfully");
    }
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const editItem = async (e) => {
    e.preventDefault();
    try {
      const editItemProfile = await axios.put(
        `http://localhost:3050/menu/${item._id}`,
        {
          type: type,
          imge: imge,
          name: name,
          price: price,
          inStock: true,
        }
      );
      console.log(editItemProfile);
      toggleEdit();
      await fetchMenu();
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item.");
    }
  };

  return (
    <div className="item">
      {isAdmin ? (
        <>
          {!isEdit ? (
            <div className="menuEdit">
              <form onSubmit={editItem}>
                <label>Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isEdit}
                />
                <br />

                <label>Imge Url: </label>
                <input
                  type="text"
                  value={imge}
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
                <label>Type: </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="hotDrink">Hot Drink</option>
                  <option value="coldDrink">Cold Drink</option>
                  <option value="sweet">Sweet</option>
                </select>
                <input className="submit" type="submit" value="save" />
              </form>
              <button onClick={toggleEdit}>cancel</button>
            </div>
          ) : (
            <>
              <img src={item.imge} alt="" />
              <div className="dec">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={add}>add</button>
                <button onClick={toggleEdit}>Edit</button>
                <button onClick={deleteItem}>Delete Item</button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <img src={item.imge} alt="" />
          <div className="dec">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={add}>add</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemFram;

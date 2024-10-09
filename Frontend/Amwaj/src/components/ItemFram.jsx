import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

const ItemFram = ({ item }) => {
  const { orderItem, setOrderItem } = useContext(AppContext);
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


  return (
    <div className="item">
      <img src={item.imge} alt="" />
      <div className="dec">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={add}>add</button>
      </div>
    </div>
  );
};

export default ItemFram;

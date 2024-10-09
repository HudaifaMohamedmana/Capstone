import React, { useContext } from "react";
import { AppContext } from "../App";

function CartFrame({ item }) {
  const { orders, setOrders } = useContext(AppContext);

  const add = () => {
    const updatedOrders = orders.item.map((orderItem) =>
      orderItem._id === item._id
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    );

    const newTotal = updatedOrders.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );

    setOrders({ ...orders, item: updatedOrders, total: newTotal });
  };

  const subtract = () => {
    if (item.quantity > 0) {
      const updatedOrders = orders.item.map((orderItem) =>
        orderItem._id === item._id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      )
      .filter((orderItem) => orderItem.quantity > 0);

      const newTotal = updatedOrders.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
      );
        setOrders({ ...orders, item: updatedOrders, total: newTotal });
      
    }
  };

  return (
    <div className="itemList">
      <img src={item.imge} alt="" />
      <div>{item.name}</div>
      <div>Price: ${item.price}</div>
      <div className="cont">
        <button onClick={add}>+</button>
        <span>{item.quantity}</span>
        <button onClick={subtract}>-</button>
      </div>
    </div>
  );
}

export default CartFrame;

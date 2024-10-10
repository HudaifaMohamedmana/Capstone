import React, { useEffect } from "react";
import axios from "axios";

function OrderFram({ order, refreshOrders  }) {
  // console.log(order);
  const deleteOrder = async () => {
    try {
      await axios.delete(`http://localhost:3050/orders/${order._id}`);
      refreshOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="orderFram">
      <div className="orderDiv">Name: {order.name}</div>
      <div className="orderOver">
        {order.item.map((orderItem) => (
          <>
            <div>
              <div>x{orderItem.quantity} </div>
              <div> {orderItem.name} </div>
              <div>${orderItem.price}</div>
            </div>
          </>
        ))}
      </div>
      <div className="orderDiv">Total: ${order.total}</div>
      <button onClick={deleteOrder}>complite</button>
    </div>
  );
}

export default OrderFram;

import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OrderFram from "./OrderFram";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { isAdmin } = useContext(AppContext);
  const navigate = useNavigate();


  const fetchOrders = async () => {
    try {
      const orders = await axios.get(`http://localhost:3050/orders`);
      console.log(orders.data);
      setOrders(orders.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchOrders();
    // console.log(orderItem);
  }, []);

  useEffect(() => {
    if (isAdmin) {
      navigate("/");
      console.log(orders);
    }
  }, [isAdmin, navigate]);

  return (
    <div className="orders">
      {orders.length > 0 ? (
        orders.map((order) => <OrderFram key={order._id} order={order} refreshOrders={fetchOrders} />)
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
}

export default Orders;

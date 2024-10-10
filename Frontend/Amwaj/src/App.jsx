import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import { Route, Routes } from "react-router-dom";

export const AppContext = createContext();

//---------------------- import components
import Nav from "./components/nav.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    address: "",
    isAdmin: false,
  });
  const [orderItem, setOrderItem] = useState([]);
  const [total, setTotal] = useState(0);

  const [orders, setOrders] = useState({
    user: user.email,
    item: orderItem,
    total: total,
  });
  const [menu, setMenu] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      user: user.email,
      item: orderItem,
      total: total,
    }));
  }, [user, orderItem, total]);
  useEffect(() => {
    const newTotal = orderItem.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    setTotal(newTotal);
  }, [orderItem, setTotal]);
  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    }else{
      setIsAdmin(false);
    }
    console.log(isAdmin)
  }, [isAdmin,user]);
  return (
    <div className="mane">
      <AppContext.Provider
        value={{
          user,
          setUser,
          orders,
          setOrders,
          menu,
          setMenu,
          orderItem,
          setOrderItem,
          total,
          setTotal,
          isAdmin,
          setIsAdmin,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

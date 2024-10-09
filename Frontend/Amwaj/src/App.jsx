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

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [orderItem, setOrderItem] = useState([]);
  const [total, setTotal] = useState(0);

  const [orders, setOrders] = useState({
    user: user.email,
    item: orderItem,
    total: total,
  });
  const [menu, setMenu] = useState([]);


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
        }}
      >
        <Nav />
        {/* <Menu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

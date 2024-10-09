import React, { useState, createContext } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import { Route, Routes } from "react-router-dom";

export const AppContext = createContext();

//---------------------- import components
import Nav from "./components/nav.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [orderItem, setOrderItem] = useState([]);

  const [orders, setOrders] = useState({
    user: user.email,
    item: orderItem,
    total: 0,
  });
  const [menu, setMenu] = useState([]);

  createContext(
    user,
    setUser,
    orders,
    setOrders,
    menu,
    setMenu,
    orderItem,
    setOrderItem
  );

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
        }}
      >
        <Nav />
        {/* <Menu /> */}
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

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
  const [orders, setOrders] = useState();
  const [menu, setMenu] = useState([]);

  createContext(user, setUser, orders, setOrders, menu, setMenu);

  return (
    <div className="mane">
      <AppContext.Provider
        value={{ user, setUser, orders, setOrders, menu, setMenu }}
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

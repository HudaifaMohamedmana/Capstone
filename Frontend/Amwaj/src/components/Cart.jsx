import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import CartFrame from "./CartFrame";

function Cart() {
  const { orders,total, setOrders, user,setOrderItem } = useContext(AppContext);
  const [isSignIn, setIsSighnIn] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  useEffect(() => {
    if (user.email === "") {
      setIsSighnIn(false);
    } else {
      setIsSighnIn(true);
    }
  }, [isSignIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    setFormData({
      name: user.name,
      email: user.email,
      address: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
    setOrderItem([])
    const response = await axios.post('http://localhost:3050/orders', {
      email: formData.email,
      item: orders.item,
      total: total,
    });
    console.log(response.data.newOrder)

  };
  const itemList = orders.item;
  // console.log(itemList);
  const signIn = () => {
    navigate("/form");
  };

  return (
    <div className="cart">
      <div className="order">
        <h1>Total: ${orders.total.toFixed(2)}</h1>
        <div className="itemBox">
          {itemList.length > 0 ? (
            itemList.map((item) => <CartFrame key={item._id} item={item} />)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="checkOut">
        {isSignIn ? (
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Checkout</h2>

            <h3>Shipping Information</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                readOnly
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <h3>Payment Information</h3>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Expiration Date:
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                placeholder="MM/YY"
              />
            </label>

            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="submit-button">
              Complete Purchase
            </button>
          </form>
        ) : (
          <button onClick={signIn}>signIn</button>
        )}
      </div>
    </div>
  );
}

export default Cart;

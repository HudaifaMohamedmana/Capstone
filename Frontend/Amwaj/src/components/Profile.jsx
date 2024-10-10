import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { user, setUser } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [address, setAddress] = useState(user.address);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const logOut = () => {
    setUser({
      id: "",
      name: "",
      email: "",
      password: "",
      address: "",
    });
    navigate("/");
  };
  const editUser = async (e) => {
    e.preventDefault();
    try {
      const editUserProfile = await axios.put(
        `http://localhost:3050/user/${user._id}`,
        {
          name: name,
          email: email,
          password: password,
          address: address,
        }
      );
      logOut();
      //   setUser(editUserProfile.data.user);
      // console.log(editUserProfile);
      toggleEdit();
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };
  const deleteUser = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      await axios.delete(`http://localhost:3050/user/${user._id}`);
      console.log(user.name, " was deleted");
      logOut();
      alert("Account deleted successfully");
      navigate("/");
    }
  };

  //---------------------------------------
  useEffect(() => {
    if (!user.email) {
      navigate("/");
      console.log("you need to sign in first");
      //   alert("you need to sign in first");
    }
  }, [user, navigate]);

  return (
    <div>
      {!isEdit && (
        <div className="form">
          <form onSubmit={editUser}>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={isEdit}
            />
            <br />

            <label>Address: </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label>Password: </label>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
              />
              <input
                className="checkbox"
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </div>

            <br />

            <input className="submit" type="submit" value="save" />
          </form>
          <button onClick={toggleEdit}>cancel</button>
        </div>
      )}
      {isEdit && (
        <div className="user">
          <div className="userInfo">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
          </div>
          <div className="userButton">
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={logOut}>log out</button>
            <button onClick={deleteUser}>Delete my account</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

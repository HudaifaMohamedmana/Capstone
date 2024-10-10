import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import { AppContext } from '../App';

export const Form = () => {
  const { setUser} = useContext(AppContext); 
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate(); 


  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        const response = await axios.post('http://localhost:3050/user', {
          name,
          email,
          password,
          address,
        });
        alert('Sign Up successful!');
        // setUser(response.data.user);
        console.log(response.data.user)
        navigate('/form');
        toggleForm()
      } else {
        const response = await axios.post(`http://localhost:3050/user/login`, {
            email: email, 
            password: password 
        });
        setUser(response.data.user);
        console.log(response.data.user)
        navigate('/');
      }
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
  };

  return (
    <div className='form'>
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={isSignUp}  
            />
            <br />

            <label>Address: </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
          </>
        )}

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

        <input className='submit' type="submit" value={isSignUp ? 'Sign Up' : 'Sign In'} />
      </form>
      <button onClick={toggleForm}>
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </button>
    </div>
  );
};

export default Form;

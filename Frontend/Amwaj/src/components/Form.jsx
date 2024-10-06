import React, { useState } from 'react';
import axios from 'axios';

export const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In
  const [name, setName] = useState(''); // Only used for Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); // Only used for Sign Up

  // Toggle the form type
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // Sign Up Logic
        const response = await axios.post('http://localhost:5000/api/users', {
          name,
          email,
          password,
          address,
        });
        alert('Sign Up successful!');
      } else {
        // Sign In Logic
        const response = await axios.post('http://localhost:5000/api/login', {
          email,
          password,
        });
        alert('Sign In successful!');
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
              required={isSignUp}  // Name is required for Sign Up
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
        />
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

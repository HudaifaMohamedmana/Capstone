import React, { useState } from 'react'
import Nav from './components/nav.jsx'
import './App.css'
import Menu from './Menu.js'



function App() {
const [userLogedIn,setUserLogedIn] = useState(true)
const [user,setUser] = useState({
    name: "",
    email: "",
    userLoggedIn: false,
  });
  const [menu, setMenu] = useState('Breakfaste')

  return (
    <div className='mane'>
      <Nav
      userLogedIn = {userLogedIn}
      setUserLogedIn = {setUserLogedIn}
      user = {user}
      setMenu = {setMenu}
      />
      <h2>{menu}</h2>
      <div className='menu'>
        <div>
        <h4>food</h4>
        <ul>
          {Menu[menu]?.food.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>))}
        </ul>
        </div>
        <div>
          <h4>drinks</h4>
        <ul>
          {Menu[menu]?.drinks.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default App
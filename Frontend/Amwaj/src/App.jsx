import React, { useState, useEffect, createContext } from 'react'
import './App.css'

import axios from 'axios'


//---------------------- import components
import Carousel from './components/Carousel.jsx'
import Menu from './components/Menu.jsx'
import Nav from './components/nav.jsx'

function App() {
  const [user,setUser]=useState()
  const [orders,setOrders] = useState()
  const [menu,setMenu] = useState()




  return (
    <div className='mane'>
      <Nav />
      <Carousel />
      <Menu />

    </div>
  )
}

export default App
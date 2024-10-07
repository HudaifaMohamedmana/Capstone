import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import axios from 'axios'
import Form  from './components/Form.jsx'
import { Route, Routes } from 'react-router-dom'


export const AppContext = createContext();

//---------------------- import components
import Carousel from './components/Carousel.jsx'
// import Menu from './components/Menu.jsx'
import Nav from './components/nav.jsx'

function App() {
  const [user,setUser]=useState()
  const [orders,setOrders] = useState()
  const [menu,setMenu] = useState()

  createContext(user , setUser , orders , setOrders, menu, setMenu)

  return (
    <div className='mane'>
      <AppContext.Provider value={{ user, setUser, orders, setOrders, menu, setMenu }}>

        <Nav />
        <Carousel />
        {/* <Menu /> */}
        <Routes>

        <Route path='/form' element={<Form />} />
        </Routes>
    </AppContext.Provider>
    </div>
  )
}

export default App
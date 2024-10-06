import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import axios from 'axios'
import Form  from './components/Form.jsx'
import { Route, Routes } from 'react-router-dom'


const Port = 'http://localhost:3050'

//---------------------- import components
import Carousel from './components/Carousel.jsx'
// import Menu from './components/Menu.jsx'
import Nav from './components/nav.jsx'

function App() {
  const [user,setUser]=useState()
  const [orders,setOrders] = useState()
  const [menu,setMenu] = useState()

  const createUser = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${Port}/user`, user);
      // 1a.) Add 2nd arg to pass data , {}
      console.log("CreatedNote : ", res);

      // 2. Update State
      setNotes(() => [res.data.note, ...notes]);
      // adds note to notes array in state.
      // ------------------------------------------
      // Clear Form state
      setUser(() => ({
        title: "",
        body: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='mane'>

      <Nav />
      <Carousel />
      {/* <Menu /> */}
      <Routes>
         
      <Route path='/form' element={<Form />} />
      </Routes>

    </div>
  )
}

export default App
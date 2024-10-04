import React, { useState } from 'react'
import Nav from './components/nav.jsx'
import './App.css'
import Carousel from './components/Carousel.jsx'
import Menu from './components/Menu.jsx'


function App() {


  return (
    <div className='mane'>
      <Nav />
      <Carousel />
      <Menu />

    </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Form from './Form';


function LogIn() {
  return (
    <div >
        
        <Link to="/Form">
        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
        </Link>

    </div>
  )
}

export default LogIn
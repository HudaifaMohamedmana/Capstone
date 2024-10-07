import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const {user, setUser} = useContext(AppContext)
    const navigate = useNavigate()

    const logeOut = (()=>{
        setUser({
            id:'',
            name:'',
            email:'',
            Password:'',
            address:''
        })
        navigate('/');
    })
  return (
    <div>
        {user.name}
        <hr />
        {user.email}
        <hr />
        {user.address}
        <button onClick={logeOut}>log out</button>
    </div>
  )
}

export default Profile
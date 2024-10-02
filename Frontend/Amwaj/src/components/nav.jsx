import React from 'react'


function Nav({userLogedIn,setUserLogedIn,uesr,setMenu}) {
    function logInHandle() {
      if (userLogedIn) {
        setUserLogedIn(false)
      }else{
        setUserLogedIn(true)
      }
    }
  return (
    <div className='nav'>   
        <div>
            <button onClick={()=>setMenu('Breakfaste')}>Breakfaste</button>
            <button onClick={()=>setMenu('lunch')}>lunch</button>
            <button onClick={()=>setMenu('Dinner')}>Dinner</button>
        </div>
        <div className='login'>
            {userLogedIn ? 
            <>
            <p>welcome User</p> 
            <button onClick={logInHandle}>logOut</button>
            
            </>
            : 
            <>
            <p></p>
            <button onClick={logInHandle}>logIn</button></>
          }
            
        </div>
    </div>
  )
}

export default Nav
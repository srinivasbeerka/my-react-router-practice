import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Home = () => {

     const navigate=useNavigate();

    const navigatetoForm=()=>{
        navigate("/success")
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={navigatetoForm}>Submit form</button>
    </div>
  )
}

export default Home
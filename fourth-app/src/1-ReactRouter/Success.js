import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Success = () => {

    const navigate=useNavigate();

    const navigateToHome=()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Form Submited</h1>
        <button onClick={navigateToHome}>Back to home</button>
    </div>
  )
}

export default Success
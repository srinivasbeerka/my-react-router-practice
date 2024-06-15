import React from 'react'
import { useParams } from 'react-router-dom'
import data from './UsersData';

//this is called useParams and Dynamic routers

const UserDetails = () => {

    const { userId }=useParams();   //by using useparams we can get the userId details .then we can map the details ..by considering the id you select

    const userDetailsData= data.find((eachUser)=>
        eachUser.id == userId
    )

  return (
    <div>
        <h1>User Details</h1>
        <h2>{userDetailsData.name}</h2>
        <h2>{userDetailsData.username}</h2>
        <h2>{userDetailsData.email}</h2>
        <h4>{userDetailsData.phone}</h4>
    </div>
  )
}

export default UserDetails
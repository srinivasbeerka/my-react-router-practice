import React from 'react'
import data from './UsersData'
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
        <h1>Users</h1>
        <div className='container-data'>
        {
            data.map((eachObj)=>{
                const{id,name,email,username}=eachObj;

                return(
                    <Link key={id} to={`/users/${id}`}>
                        <article>
                            <h1>{name}</h1>
                            <h1>{email}</h1>
                            <h1>{username}</h1>
                        </article>
                    </Link>
                )
            })
        }
        </div>
    </div>
  )
}

export default Users
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <nav>
            <Link to='/projects/featured'>Featured projects</Link>
            <Link to='/projects/new'>New projects</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Projects
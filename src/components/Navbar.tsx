import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (): JSX.Element {
  return (
    <nav className="navbar">
        <Link to="/">LOGO</Link>
        <ul>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </nav>
  )
}

export default Navbar

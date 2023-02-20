import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar" style={{ marginBottom: '40px' }}>
        <Link to="/">LOGO</Link>
        <ul>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Profile</Link>
        </ul>
    </nav>
  )
}

export default Navbar

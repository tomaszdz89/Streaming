import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (): JSX.Element => {
  return (
    <nav className="nav">
        <ul style={{ display: 'flex', gap: '20px' }}>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </nav>
  )
}

export default Nav

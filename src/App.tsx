import React from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { history } from './helpers/history'

function App (): JSX.Element {
  history.navigate = useNavigate()

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default App

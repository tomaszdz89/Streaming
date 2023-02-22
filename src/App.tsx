import React from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Profile from './components/Profile'
import { history } from './helpers/history'
import Header from './components/Header'

function App (): JSX.Element {
  history.navigate = useNavigate()

  return (
    <div className="App">
        <Header />
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

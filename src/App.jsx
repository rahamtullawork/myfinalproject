import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import Register from './Register'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

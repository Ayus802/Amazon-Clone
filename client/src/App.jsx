// import { useState } from 'react'
import Hero from './components/Hero'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/res' element={<Home/>} />
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Home from './componts/Home'
import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import User from './componts/User';
import About from './componts/About';
import Userdetails from './componts/Userdetails';

const App  = () =>  {
 

  return (
    <div className='m-10'>
     <nav className='mt-10 mb-10 flex justify-center gap-10'>
      <Link to="/" >Home</Link>
      <Link to="/user" >User</Link>
      <Link to="/about" >About</Link>
     </nav>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="user" element={<User/>}/>
        
      <Route path="/user/:id" element={<Userdetails/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
       
    </div>
  )
}

export default App


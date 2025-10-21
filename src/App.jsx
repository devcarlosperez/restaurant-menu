import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MenuList from './pages/MenuList'
import Categories from './pages/Categories'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<MenuList/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MenuList from './pages/MenuList'
import Categories from './pages/Categories'
import CategoryMeals from './pages/CategoryMeals'
import MealDetail from './pages/MealDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<MenuList/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:categoryName' element={<CategoryMeals/>}/>
        <Route path='/meal/:id' element={<MealDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

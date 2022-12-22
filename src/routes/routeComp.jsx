import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const RouteComp = () => {
  return (
    <>
      <BrowserRouter>
       <Nav/>
       <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
         </Routes>
      </BrowserRouter> 
    </>
  )
}
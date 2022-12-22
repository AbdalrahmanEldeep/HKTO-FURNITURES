import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { localNavigation } from '../context/context'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const RouteComp = () => {
  const [navigation] = useContext(localNavigation);
  return (
    <>
      <BrowserRouter>
       <Nav/>
       <Header val={navigation}/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
         </Routes>
      </BrowserRouter> 
    </>
  )
}
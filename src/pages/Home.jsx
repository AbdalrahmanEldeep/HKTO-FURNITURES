import React, { useContext, useEffect } from 'react'
import { localNavigation } from '../context/context';

export const Home = () => {
  const [navigation,setNavigation] = useContext(localNavigation);

  useEffect(() => {
    setNavigation("Home");
  },[]);
  return (
    <>
     <h1>Hallo</h1>
    </>
  )
}
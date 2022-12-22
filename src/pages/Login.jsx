import React, { useContext, useEffect } from 'react'
import { Banner } from '../components/Banner'
import { Brrands } from '../components/Brrands'
import { LoginForm } from '../components/LoginForm'
import { localNavigation } from '../context/context'


export const Login = () => {
  const [navigation,setNavigation] = useContext(localNavigation);

  useEffect(() => {
    setNavigation("none");
  },[]);
  return (
    <>
      <Banner head="MyAccount" title="Home" subtitle="MyAccount"/>
      <LoginForm/>
      <Brrands/>
    </>
  )
}

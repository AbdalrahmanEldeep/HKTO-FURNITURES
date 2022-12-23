import React, { useContext, useEffect, useRef } from 'react'
import { CardCollection_1 } from '../components/CardCollection_1';
import { HeroSlide } from '../components/HeroSlide';
import { Slider } from '../components/Slider';
import { localNavigation } from '../context/context';


export const Home = () => {
  const [navigation,setNavigation] = useContext(localNavigation);

  useEffect(() => {
    setNavigation("Home");
  },[]);

  return (
    <>
     <HeroSlide/>
     <Slider/>
    </>
  )
}
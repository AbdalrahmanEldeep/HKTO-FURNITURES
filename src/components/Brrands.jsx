import React, { useContext } from 'react'
import BannerImg from "../../public/assets/brannd.svg"
import { localNavigation } from '../context/context'

export const Brrands = () => {
  return (
    <div className='h-72 flex justify-center align-middle'>
        <img width="800px" height="800px" src={BannerImg} alt="" />
    </div>
  )
}

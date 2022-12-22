import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 2.3rem;
`

export const Banner = ({head,title,subtitle}) => {
  return (
    <div className="bg-ltbg h-80">
        <div className='container mx-auto h-full px-4'>
           <div className="container w-4/5 pl-14 mx-auto flex flex-col justify-center  h-full">
               <Header className='font-main font-bold text-dark'>{head}</Header>
               <p className='font-main font-semiboldbold'>{title}. <span className='text-main'>{subtitle}</span></p>
           </div>
        </div>
    </div>
 )
}

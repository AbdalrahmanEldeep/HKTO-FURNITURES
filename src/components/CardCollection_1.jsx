import React from 'react'
import  styled  from 'styled-components';
import { Card_1 } from '../components/Card_1';
import ImgSrc_1 from "../../public/assets/home-assets/prodcuts/chair-sm-1.png"
import ImgSrc_2 from "../../public/assets/home-assets/prodcuts/chair-sm-2.png"
import ImgSrc_3 from "../../public/assets/home-assets/prodcuts/chair-sm-3.png"
import ImgSrc_4 from "../../public/assets/home-assets/prodcuts/chair-sm-4.png"


const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
`
const images = [ImgSrc_1,ImgSrc_2,ImgSrc_3,ImgSrc_4];

export const CardCollection_1 = () => {
  return (
    <div className='my-10'>
        <Container>
            {images.map((e,i) =>{
               return <Card_1 src={e} key={e} activer ={i == 2  ? true : false}/>
            })}
        </Container>
    </div>
  )
}

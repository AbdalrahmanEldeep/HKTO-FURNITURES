import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

export const Card_1 = ({src,activer}) => {
  return (
    <div className="group w-72 rounded-md shadow-md mb-10">
        <div className='group h-64 bg-ltbg flex relative  overflow-hidden items-center justify-center'>
            <div>
                <a href="#">
                    <img className="rounded-t-lg"  src={src} alt="" />
                </a>
            </div>
            <div className={activer ? 'w-full text-white left-3 transition-all flex gap-5 h-8 absolute top-3' : 'w-full text-white  left-full  group-hover:left-3 transition-all flex gap-5 h-8 absolute top-3'}>
                <div className='rounded cursor-pointer hover:bg-primary bg-main w-7 h-7 flex justify-center items-center'>
                  <ShoppingCartIcon fontSize='sm'/>
                </div>
                <div className='rounded cursor-pointer hover:bg-main bg-primary w-7 h-7 flex justify-center items-center'>
                  <FavoriteBorderIcon fontSize='sm'/>
                </div>
                <div className='rounded cursor-pointer hover:bg-primary bg-main w-7 h-7 flex justify-center items-center'>
                  <ZoomInIcon fontSize='sm'/>
                </div>
            </div>
        </div>
        <div className={activer ? " text-center font-main bg-main" : " text-center font-main group-hover:bg-main"}>
            <a href="#">
                <h5 className={activer ? "text-white font-semibold py-3 text-xl" : "text-primary group-hover:text-white font-semibold py-3 text-xl"}>Cacordial Chair</h5>
            </a>
            <div className='flex gap-2 justify-center mb-5'>
                <span className={activer ? 'w-4 h-1 bg-white' : 'w-4 h-1 bg-main group-hover:bg-white'}></span>
                <span className='w-4 h-1 bg-primary'></span>
                <span className='w-4 h-1 bg-dark'></span>
            </div>
            <p className= {activer ? "my-3 text-white": "my-3 group-hover:text-white text-dark"} >Code - Y3NDJE</p>
            <p className= {activer ? "my-3 text-white": "my-3 group-hover:text-white text-dark"}>$42.00</p>
        </div>
    </div>
  )
}

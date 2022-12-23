import React from 'react'
import { CardCollection_1 } from './CardCollection_1'

export const Slider = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel   slide relative" data-bs-ride="carousel">
    <h1 className='font-main font-bold text-center text-dark my-20 text-3xl sm:text-4xl'>Featured Products</h1>
    <div className="carousel-indicators  absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
        style={{backgroundColor:"#FB2E86"}}
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        style={{backgroundColor:"#FB2E86"}}
        ></button>
        <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        style={{backgroundColor:"#FB2E86"}}
        ></button>
    </div>
    <div className="carousel-inner relative h-auto w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
            <CardCollection_1/>
        </div>
        <div className="carousel-item relative float-left w-full">
            <CardCollection_1/>
        </div>
        <div className="carousel-item relative float-left w-full">
            <CardCollection_1/>
        </div>
    </div>
    <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
    >
        <span className="carousel-control-prev-icon bg-main inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
    >
        <span className="carousel-control-next-icon bg-main inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  )
}

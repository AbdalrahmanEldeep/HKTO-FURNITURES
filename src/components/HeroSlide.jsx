import React from 'react'
import { Hero } from '../components/Hero';
import 'tw-elements';
import HeroImg_1 from "../../public/assets/home-assets/main-hero.png"
import HeroImg_2 from "../../public/assets/home-assets/hero-2.png"
import HeroImg_3 from "../../public/assets/home-assets/hero.png"
export const HeroSlide = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel mb-32 slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active bg-main"
          style={{backgroundColor:"#7E33E0"}}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{backgroundColor:"#7E33E0"}}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{backgroundColor:"#7E33E0"}}
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active bg-main float-left w-full">
          <Hero src={HeroImg_1}/>
        </div>
        <div className="carousel-item float-left w-full">
          <Hero src={HeroImg_2}/>
        </div>
        <div className="carousel-item float-left w-full">
          <Hero src={HeroImg_3}/>
        </div>
      </div>
      <div className='flex sm:hidden'>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-main inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-main inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    </div>
  )
}

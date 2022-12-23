import React, { useState } from "react";
import styled from "styled-components";
import LampImg from "../../public/assets/home-assets/lamp.png"

const Header = styled.section`
    height: calc(100vh - 160px);
`

export const  Hero = ({src}) => {
    return (
        <>
        <Header className="bg-ltbg flex items-center p-5">
         <img src={LampImg} className="absolute w-36 top-0  sm:w-80 right-0" alt="" />
         <div className="mx-auto container relative">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                    <p className="text-primary text-center sm:text-left font-semibold mb-6">Best Furniture For Your Castle....</p>
                    <h1 className="font-main text-xl text-center sm:text-left md:text-3xl xl:text-5xl font-bold  sm:text-5xl" style={{lineHeight:"70px"}}>New Furniture Collection <br/> Trends in 2022</h1>
                    <h2 className="md:w-8/12 py-10 text-sm lg:text-sm text-center md:text-left md:py-8 text-scandry font-semibold  xl:text-lg">Do you want to control your expenses and be always aware of how much money you have spent? </h2>
                    <div className="w-full flex justify-center md:block">
                        <button className="bg-primary text-white py-3 px-10 rounded-sm font-semibold hover:bg-main ">Shop Now</button>
                    </div>
                </div>
                <div className="w-1/2 overflow-hidden sm:w-100 h-64 md:h-auto m-auto flex items-center">
                    <img className="" src={src} alt />
                </div>
              </div>
            </div>
        </Header>
        </>
    );
}


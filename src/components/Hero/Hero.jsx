import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div id='home' className='text-white'>
            <div className='mx-w-[800px] mt-[-96px] w-full h-screen text-center flex-col flex mx-auto justify-center'>
            <h1 className='font-bold md:text-7xl sm-text-6xl text-4xl md:p-6'>LAWAN BULLYING</h1>
            <div className='flex justify-center items-center'>
            <p className='font-bold md:t-ext-5xl sm:text-4xl text-xl py-4'>Bersama Go Away</p>

            <Typed className='font-bold md:t-ext-5xl pl-2 md:pl-4 sm:text-4xl text-xl text-[#009EFF]' 
            strings={['Bullies']}
            typeSpeed={100} 
            backSpeed={80} 
            loop/>
            </div>
        <button className='bg-[#009EFF]  transition-all duration-300 hover:scale-75  w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white'>Gabung</button>
            </div>
        </div>
    );
};

export default Hero;
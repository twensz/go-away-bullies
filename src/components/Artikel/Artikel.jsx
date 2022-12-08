import React from 'react';

const Cards = () => {
    return (
        <div id='artikel' className='w-full py-[10rem] px-4 bg-white'>
            <div className='mx-w-[800px] mt-[-90px] w-full text-center flex-col flex mx-auto justify-center'>
            <h1 className='md:text-4xl sm:text-3xl font-bold text-2xl py-2'>Artikel Terbaru</h1> 
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 mb:my-0 rounded-lg hover:scale-105 duration-300'>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 Desember 2022</p>
                        <p className='py-2 border-b mx-8 font-bold'>Bagaimana Cara menghadapi Bullying</p>
                        <p className='py-1 border-b mx-8 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
                    </div>
                    <button className='bg-[#009EFF] transition-all duration-300 hover:scale-75 text-white rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Selengkapnya</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 Desember 2022</p>
                        <p className='py-2 border-b mx-8 font-bold'>Bagaimana Cara menghadapi Bullying</p>
                        <p className='py-1 border-b mx-8 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
                    </div>
                    <button className='bg-[#009EFF] transition-all duration-300 hover:scale-75  text-white rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Selengkapnya</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-8 mb:my-0 rounded-lg hover:scale-105 duration-300'>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 Desember 2022</p>
                        <p className='py-2 border-b mx-8 font-bold'>Bagaimana Cara menghadapi Bullying</p>
                        <p className='py-1 border-b mx-8 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 
                    </div>
                    <button className='bg-[#009EFF] transition-all duration-300 hover:scale-75  text-white rounded-md font-medium my-6 mx-auto px-6 py-3 w-[200px]'>Selengkapnya</button>
                </div>
            </div>
        
            <button className='bg-[#009EFF]  transition-all duration-300 hover:scale-75  w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-white'>Artikel Lainnya</button>
         
            
        </div>
    );
};

export default Cards;
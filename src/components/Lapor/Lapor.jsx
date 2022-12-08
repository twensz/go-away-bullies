import React from 'react';
import Stop from '../Assets/stop.jpg';

const Analytics = () => {
    return (
        <div id='lapor' className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Stop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#009EFF] font-bold'>Jangan Takut</p>
                <h1 className='md:text-4xl sn:text-3xl txet-2xl font-bold py-2'>LAPORKAN TINDAK BULLYING</h1>
                <p>Jika Anda melihat atau mengalami tindak Bullying, Anda bisa langsung melaporkannya disini</p>
                <button className='bg-[#009EFF] transition-all duration-300 hover:translate-x-3 text-white w-[200px] mx-auto md:mx-0 rounded-md my-6 font-medium px-6 py-3'>LAPOR</button>
            </div>
            </div>
        </div>
    );
};

export default Analytics;
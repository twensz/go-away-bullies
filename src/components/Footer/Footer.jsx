import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-3 text-gray-300 bg-black'>
        <div>
        <h1 className='text-[#009EFF] text-3xl font-bold w-full'>GO AWAY BULLIES</h1>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
        <h6 className='font-medium text-gray-400'>Navigasi</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#009EFF] hover:translate-x-3'><a href='#home'>Beranda</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#009EFF] hover:translate-x-3'><a href='#lapor'>Lapor</a></li>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#009EFF] hover:translate-x-3'><a href='#artikel'>Artikel</a></li>
            </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Alamat</h6>
        <ul>
            <li className='py-1 text-sm transition-all duration-300 hover:text-[#009EFF] hover:translate-x-3'><a href='#loc'>Dicoding Raya, Bandung Jawa Barat</a></li>
            </ul>
        </div>
        </div>
        </div>
    );
};

export default Footer;
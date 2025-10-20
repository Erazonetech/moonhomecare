import React from 'react';
import HeroImg from '../assets/hero.svg';
import {FiSearch} from 'react-icons/fi';

function Hero() {
  return (
    <div className='w-full py-10 md:py-20'>
      <div className='max-w-[1100px] mx-auto grid md:grid-cols-2 px-4 items-center text-center md:text-left'>
        {/* text */}
        <div className="flex flex-col gap-3 max-w-[450px] order-2 md:order-1 mt-10 md:mt-0">
          <p className='text-[#0079FF] font-bold text-xl md:text-3xl uppercase'>Welcome to MOON Home Care!</p>
          <p className='text-2xl md:text-3xl font-bold'>Call on the services of our best nurses for home care</p>
          <p className='mt-6 text-gray-700 font-light'>Trust, speed and security</p>
          <button className="bg-[#0079FF] w-[200px] rounded-full text-xl text-white font-bold text-center py-2 cursor-pointer mx-auto md:mx-0">To start</button>
          <p className='text-sm text-gray-600 border-b w-fit cursor-pointer hover:text-[#0079FF] hover:border-[#0079FF] font-light mx-auto md:mx-0'>Learn more about the procedure</p>
        </div>
        {/* image */}
          <img  className='w-full ml-auto order-1 md:order-2' src={HeroImg} alt="doctor" />
      </div>
      <div className='verify bg-white shadow-lg border rounded w-[800px] max-w-full mx-auto mt-20 text-center py-10'>
        <h3 className='text-2xl font-bold mb-4'>Check if our service is available in your region</h3>
        <form className='flex flex-col md:flex-row w-full md:w-fit px-10 md:px-0 mx-auto items-center gap-4'>
          <select className='py-2 px-4 text-xl capitalize bg-white border rounded w-full md:w-[200px]'>
            <option value="/">region</option>
            <option value="wolaita">wolaita</option>
            <option value="sidama">Sidama</option>
            <option value="gamo">Gamo</option>
            <option value="gofa">Gofa</option>
            <option value="dawuro">Dawuro</option>
          </select>
          <select className='py-2 px-4 text-xl capitalize bg-white border rounded w-full md:w-[200px]'>
            <option value="/">City</option>
            <option value="sodo">Sodo</option>
            <option value="hawassa">Hawassa</option>
            <option value='arbaminch'>Arbaminch</option>
            <option value='sawula'>Sawula</option>
            <option value='tarcca'>Tarcca</option>
          </select>
          <button className='bg-[#0079FF] py-3 px-4 rounded flex items-center justify-center w-full md:w-fit'><FiSearch size={20} color='white'/></button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
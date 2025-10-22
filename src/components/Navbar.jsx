import React from 'react';
import {useState} from 'react';
import {BsHeartPulseFill} from 'react-icons/bs';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar({isAbout}) {

    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        // later make it with prevState
    };

  return (
    <div className=''>
    <div className='flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4'>
        {/* logo */}
        <Link to='/' className="flex items-center gap-3">
            <i><BsHeartPulseFill size={35} color='#0079FF'/></i>
            <h1 className="text-3xl font-bold text-[#0079FF]">MOON Home Care</h1>
        </Link>
        {/* web version menu */}
        <ul className="hidden md:flex items-center gap-6">
            <a href={isAbout ? "/" :"/" }><li className="text-lg cursor-pointer hover:text-[#0079FF] hover:font-bold hover:border-b hover:border-b-[#0079FF] ease-linear duration-100">Welcome</li></a>
            <a href={isAbout ? "/" :"#services" }><li className="text-lg cursor-pointer hover:text-[#0079FF] hover:font-bold hover:border-b hover:border-b-[#0079FF] ease-linear duration-100">Services</li></a>
            <Link to="about"><li className="text-lg cursor-pointer hover:text-[#0079FF] hover:font-bold hover:border-b hover:border-b-[#0079FF] ease-linear duration-100">About</li></Link>
            <a href={isAbout ? "/" :"#contact" }><li className="text-lg cursor-pointer hover:text-[#0079FF] hover:font-bold hover:border-b hover:border-b-[#0079FF] ease-linear duration-100">Contact</li></a>
            {/* later it will be a button */}
            <li className="text-lg bg-[#0079FF] w-[150px] rounded-full text-white font-bold text-center py-2 cursor-pointer">To start</li>
        </ul>
        {/* close and open menu icons */}
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineMenu className="cursor-pointer" size={20}/> : <AiOutlineClose className="cursor-pointer" size={20}/>}
        </div>
        {/* mobile version menu */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full bg-[#0079FF] text-white  ease-in-out duration-500 z-[1000000]' : 'fixed left-[-100%]'}>
            <div className="logo flex items-center gap-3 px-4 h-24">
                <i><BsHeartPulseFill size={35} color='white'/></i>
                <h1 className="text-3xl font-bold text-white ">MOON Home Care</h1>
            </div>
            <ul className='uppercase font-bold p-4'> 
                <a href="/"><li className='p-4 border-b cursor-pointer'>Welcome</li></a>
                <a href={isAbout ? "/" :"#services" }><li className='p-4 border-b cursor-pointer'>Services</li></a>
                <Link to={'/about'}><li className='p-4 border-b cursor-pointer'>About</li></Link>
                <a href={isAbout ? "/" :"#contact" }><li className='p-4 border-b cursor-pointer'>Contact</li></a>
                {/* later it will be a button */}
                <li className="m-4 bg-white w-[150px] rounded-full text-[#0079FF] font-bold text-center py-2 cursor-pointer">To start</li>
            </ul>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
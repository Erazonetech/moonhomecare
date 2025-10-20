import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
  } from 'react-icons/fa';
  
  function Footer() {
    return (
      <div className='w-full bg-[#212529] text-center'>
        <div className="py-16 max-w-[1240px] mx-auto px-4 pb-16 grid lg:grid-cols-3 gap-20 text-white">
          <div>
            <h1 className='w-full text-3xl font-bold text-[#0079FF]'>MOON Home Care</h1>
            <p className='pt-4 pb-2'>The first home care service in Wolaita</p>
            <p className='pb-4'> Call on the services of our best nurses for home care</p>
            <div className='mx-auto flex justify-center md:justify-between gap-10 md:gap-0 md:w-[33%] my-4 '>
              <FaFacebookSquare size={30} className='cursor-pointer hover:scale-125'/>
              <FaInstagram size={30} className='cursor-pointer hover:scale-125'/>
              <FaTwitterSquare size={30} className='cursor-pointer hover:scale-125'/>
            </div>
          </div>
          <div>
              <h6 className='text-xl mb-4 text-[#0079FF] font-bold'>Useful Links</h6>
              <ul>
                <a href="/"><li className='py-2'>Welcome</li></a>
                <a href="#services"><li className='py-2'>Services</li></a>
                <a href="#about"><li className='py-2'>About</li></a>
                <a href="#contact"><li className='py-2'>Contact</li></a>
              </ul>
          </div>
          <div>
          <h6 className='text-xl mb-4 text-[#0079FF] font-bold'>How to contact us</h6>
              <ul>
                <li className='py-2'>+251916880579</li>
                <li className='py-2'>moonhomecare@gmail.com</li>
                <li className='py-2'>Working hours: 08:00 - 23:00</li>
              </ul>
          </div>
        </div>
        <div className="border-t border-t-[#777] py-8 text-center text-lg text-white">
          <p>&copy; {new Date().getFullYear()} - Erazone Tech Soutions</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
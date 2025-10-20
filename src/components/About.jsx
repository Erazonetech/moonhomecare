import React from 'react';

function About() {
  return (
    <div id="about" className='w-full my-40 bg-[#212529] py-20 px-5 md:p-20'>
        <div className='text-center'>
            <h3 className='text-3xl md:text-5xl text-[#0079FF] font-bold'>About Us</h3>
            <h4 className='tex-lg md:text-xl text-white mt-2 font-light'>Learn more about MOON Home Care, our past, present and future</h4>
        </div>
        <div className='max-w-[1200px] mx-auto text-center mt-20'>
            <h3 className='text-white text-xl md:text-2xl'>MOON Home Care is the first home care service in Wolaita</h3>
            <h4 className='text-gray-500 my-4 text-lg'>Our goal is to deliver the best healthcare services to our citizens without them having to travel.</h4>
            <p className='text-white text-lg md:text-xl'>Our startup offers an app that facilitates the connection between patients and nurses for home care. The problem we solve is the difficulty patients have in finding qualified nurses for home care. Our innovative solution allows patients to schedule home care and communicate with nurses in real time.</p>
        </div>

  <div>
    <div className='flex flex-col w-[80%] shadow-md shadow-slate-200 p-5  transition-all m-auto items-center justify-center my-20'>
                <h2 className='text-3xl md:text-5xl text-[#0079FF] font-bold  mb-10'>Team Members</h2>
            </div>
          <div className='flex justify-center gap-10 team'>

                <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="/bereket.JPG" alt="pp" className='rounded-t-2xl h-[300px] w-[200px] hover:scale-110 transition-all -z-10' />
                    <div className='absolute top-[85%] left-2.5 bg-white shadow-md shadow-black w-[90%] rounded-md px-2 py-4 flex flex-col items-center desc'>
                        <h2 className='text-xl text-[#0079FF] mb-2'>Dr. Bereket Paulos</h2>
                        <p className='italic text-lg mb-1'>CEO</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out '> has over 3 years of experience in healthcare. Currently, Bereket is the Founder and CEO of Lifeline Addis Home-Based Healthcare Services!</p>
                    </div>
                </div>

                  <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="/Nebiyat.jpg" alt="pp" className='rounded-t-2xl h-[300px] w-[200px] hover:scale-110 transition-all' />
                    <div className='absolute top-[85%] left-2.5 bg-white shadow-md shadow-black w-[90%] rounded-md px-2 py-4 flex flex-col items-center'>
                        <h2 className='text-xl text-[#0079FF] mb-2'>Dr. Nebiyat Haliso</h2>
                        <p className='italic text-lg mb-1'>Co-Founder</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out'>A young physician currently working in Wolaita/ sodo!</p>
                    </div>
                </div>
                  <div className='relative flex flex-col items-center group transition-all transform'>
                    <img src="/Asfawosen.JPG" alt="pp" className='rounded-t-2xl h-[300px] w-[200px] hover:scale-110 transition-all ' />
                    <div className='absolute top-[85%] left-2.5 bg-white shadow-md shadow-black w-[90%] rounded-md px-2 py-4 flex flex-col items-center'>
                        <h2 className='text-xl text-[#0079FF] mb-2'>Asfawosen Endale</h2>
                        <p className='italic text-lg mb-1'>Co-Founderr</p>
                        <p className='hidden group-hover:block group-hover:opacity-100 transform  transition-all duration-1000 ease-in-out'>Business Development manager and partnership lead A physician currently practicing in Wolaita/Sodo, Ethiopia.!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
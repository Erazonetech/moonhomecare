import React from 'react';

function About() {
  return (
    <div id="about" className='w-full'>
       <div className='text-center'>
            <h3 className='text-3xl md:text-5xl text-[#0079FF] font-bold'>About Us</h3>
            {/* <h4 className='tex-lg md:text-xl text-white mt-2 font-light'>Learn more about MOON Home Care, our past, present and future</h4> */}
        </div>
        <div className='grid grid-cols-3 gap-10 px-5 md:py-10 md:px-20'>
          <div className='bg-gray-200 p-10 rounded-lg shadow-md hover:shadow-black'>
            <h2 className='text-xl font-semibold text-center mb-2'>Mission</h2>
            <p className='text-gray-600'>To deliver dignified, reliable, and culturally respectful home care that strengthens families, improves well-being, and enables people in Wolaita Zone to live safely and independently at home.</p>
          </div>
          <div className='bg-gray-200 p-10 rounded-lg shadow-md hover:shadow-black'>
            <h2 className='text-xl font-semibold text-center mb-2'>Vision</h2>
            <p className='text-gray-600'>A future where affordable, high-quality home care is accessible in every community in Southern Ethiopia—with MOON Home Care recognized as a trusted partner to families, clinicians, and community leaders.</p>
          </div>
          <div className='bg-gray-200 p-10 rounded-lg shadow-md hover:shadow-black'>
            <h2 className='text-xl font-semibold text-center mb-2'>Goal</h2>
            <p className='text-gray-600'>To expand access to safe, person-centered home care across Sodo City and Wolita Zone—improving quality of life, supporting independence, and reducing avoidable hospital visits by bringing skilled, compassionate support directly to the home.</p>
          </div>
        </div>
    <div className='w-full my-20 mt-10 bg-[#212529] py-20 px-5 md:p-20'>
      <h2 className='text-blue-600 text-3xl text-center italic'>Learn more about MOON Home Care</h2>
        <div className='max-w-[1200px] mx-auto text-center mt-20 grid grid-cols-3 gap-10'>
            <h3 className='text-black text-lg md:text-lg bg-gray-300 p-5 rounded-lg shadow-lg hover:shadow-red-400 transition-all duration-75'>Nestled in the heart of Sodo City, MOON Home Care is a locally-founded and community-focused provider of compassionate in-home care services for the people of Wolaita Zone. We were born from a deep-rooted respect for our elders and a fundamental belief that everyone deserves to be cared for with dignity, especially help older adults, people with disabilities, and people recovering from illness or surgery receive compassionate support where they feel safest: at home.</h3>
            <h4 className='text-black text-lg md:text-lg bg-gray-300 p-5 rounded-lg shadow-lg hover:shadow-red-400 transition-all duration-75'>Our name, MOON, represents our guiding principle: to be a gentle, constant, and reassuring light during times of need. Like the moon that watches over the night, we provide a calm and dependable presence for our clients and their families.</h4>
            <p className='text-black text-lg md:text-lg bg-gray-300 p-5 rounded-lg shadow-lg hover:shadow-red-400 transition-all duration-75'>Our team is comprised of dedicated, trained, and professional caregivers from our own community. We understand the local culture, values, and the importance of family. We are not just a service; we are your neighbours, committed to strengthening our community by supporting its most cherished members. We provide a range of services from elderly care and post-hospitalization support to companionship and assistance with daily activities, all delivered with a heart of compassion and a standard of excellence.</p>
        </div>

  <div>
            <div className='flex flex-col  w-[80%] shadow-md shadow-slate-200 p-5  transition-all m-auto items-center justify-center my-20'>
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

    </div>
  );
}

export default About;
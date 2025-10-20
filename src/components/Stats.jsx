import React from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BsArrowUp, BsBuildingAdd} from 'react-icons/bs';




function Stats() {
  return (
    <div className='max-w-[1240px] mx-auto my-12'>
        <div className='text-center'>
            <h3 className='text-4xl md:text-5xl text-[#0079FF] font-bold'>Statistics</h3>
            <h4 className='textl-lg md:text-xl text-gray-600 mt-2 font-light'>Take a look at the latest statistics regarding our services</h4>
        </div>
        <div className='flex flex-col md:flex-row mx-auto w-fit items-center gap-12 mt-20'>
            <div className='bg-white border border-[#f4f4f4] shadow-lg rounded-md py-8 px-10 w-full md:w-fit hover:shadow-black'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><AiOutlineUserAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Nurses</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>57</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 10 </span> in the last 7 days</p>
            </div>

            <div className='bg-white border border-[#f4f4f4] shadow-lg rounded-md py-8 px-10 w-full md:w-fit hover:shadow-black'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><AiOutlineUserAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Customers</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>1,252</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 14 </span> in the last 7 days</p>
            </div>

            <div className='bg-white border border-[#f4f4f4] shadow-md rounded-md py-8 px-10 w-full md:w-fit hover:shadow-black'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><BsBuildingAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Regions</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>9</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 2 </span> in the last month</p>
            </div>
        </div>
    </div>
  );
}

export default Stats;
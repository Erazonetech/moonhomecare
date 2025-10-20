import React, { useState } from 'react';
import {BsHeartPulseFill} from 'react-icons/bs';
import {BiRightArrowAlt} from 'react-icons/bi';

function Downloads() {

 const [selectedItem, setSelectedItem] = useState(false);

  const openModal = () => {
    setSelectedItem(true);
  };

  const closeModal = () => {
    setSelectedItem(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto my-40">
        <div className='text-center'>
            <h3 className='text-4xl md:text-5xl text-[#0079FF] font-bold'>Downloads</h3>
            <h4 className='textl-lg md:text-xl text-gray-600 mt-2 font-light'>Take the time to download our application to take advantage of our services</h4>
        </div>
        <div className='w-fit mx-auto flex flex-col md:flex-row items-center gap-10 mt-20 cursor-pointer'>
            <div className='flex items-center gap-4 border py-10 px-8 rounded' onClick={() => openModal()}>
                <i className='bg-[#0079FF] p-4 rounded-sm flex items-center justify-center mr-5'><BsHeartPulseFill color='white' size={40}/></i>
                <p className='text-xl md:text-2xl max-w-[300px]'>Download the app for nurses</p>
                <i><BiRightArrowAlt size={35}/></i>
                 {selectedItem && (
                 <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg overflow-y-auto shadow-xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-600 mb-6 whitespace-pre-wrap">Please wait patiently. We are building</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
                  </div>
                )}
            </div>
            <div className='flex items-center gap-4 border py-10 px-8 rounded cursor-pointer' onClick={() => openModal()}>
                <i className='bg-[#0079FF] p-4 rounded-sm flex items-center justify-center mr-5'><BsHeartPulseFill color='white' size={40}/></i>
                <p className='text-xl md:text-2xl max-w-[300px]'>Download the patient app</p>
                <i><BiRightArrowAlt size={35}/></i>
                   {selectedItem && (
                 <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg overflow-y-auto shadow-xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-600 mb-6 whitespace-pre-wrap">Please wait patiently. We are building</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
                  </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default Downloads;
import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs"
import ServicesImg from '../assets/services.svg';

const items = [
  { id: 1, title: 'Doctor care', details: 'A doctor may visit a patient at home to diagnose and treat the illness(es). He or she may also periodically review the home health care needs.' },
  { id: 2, title: 'Nursing care', details: `The most common form of home health care is some type of nursing care depending on the person's needs. In consultation with the doctor, a registered nurse will set up a plan of care. Nursing care may include wound dressing, ostomy care, intravenous therapy, administering medication, monitoring the general health of the patient, pain control, and other health support.` },
  { id: 3, title: 'Physical, occupational, and/or speech therapy', details: 'Some patients may need help relearning how to perform daily duties or improve their speech after an illness or injury. A physical therapist can put together a plan of care to help a patient regain or strengthen use of muscles and joints. An occupational therapist can help a patient with physical, developmental, social, or emotional disabilities relearn how to perform such daily functions as eating, bathing, dressing, and more. A speech therapist can help a patient with impaired speech regain the ability to communicate clearly.' },
  { id: 4, title: 'Care from home health aides', details: `Home health aides can help the patient with his or her basic personal needs such as getting out of bed, walking, bathing, and dressing. Some aides have received specialized training to assist with more specialized care under the supervision of a nurse.` },
  { id: 5, title: 'Medical social services', details: `Medical social workers provide various services to the patient, including counseling and locating community resources to help the patient in his or her recovery. Some social workers are also the patient's case manager--if the patient's medical condition is very complex and requires coordination of many services.` },
  { id: 6, title: 'Companionship', details: 'Some patients who are home alone may require a companion to provide comfort and supervision. Some companions may also perform household duties.' },
  { id: 7, title: 'Volunteer care', details: 'Volunteers from community organizations can provide basic comfort to the patient through companionship, helping with personal care, providing transportation, emotional support, and/or helping with paperwork.' },
  { id: 8, title: 'Nutritional support', details: `Dietitians can come to a patient's home to provide dietary assessments and guidance to support the treatment plan.` },
  { id: 9, title: 'Laboratory and X-ray imaging', details: `Certain laboratory tests, such as blood and urine tests, can be performed in the comfort of the patient's home. In addition, portable X-ray machines allow lab technicians to perform this service at home.` },
  { id: 10, title: 'Pharmaceutical services', details: 'Medicine and medical equipment can be delivered at home. If the patient needs it, training can be provided on how to take medicines or use of the equipment, including intravenous therapy.' },
];

function Services() {

const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };


  return (
    <div id="services" className='max-w-[1200px] mx-auto my-40'>
        <div className='text-center'>
            <h3 className=' text-5xl text-[#0079FF] font-bold'>Services</h3>
            <h4 className='textl-lg md:text-xl text-gray-600 mt-2 font-light'>Discover all the services our nurses offer</h4>
        </div>
        <div className='grid md:grid-cols-2 items-center gap-10 md:gap-10 mt-16 md:mt-28'>
          {/* image */}
          <img  className='w-3/4 mx-auto md:mr-auto' src={ServicesImg} alt="doctor" />
          {/* grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 md:grid-rows-3 gap-2">
        {items.map((item) => (

          <div key={item.id} className="benefit bg-white flex items-center px-6 gap-3 h-16 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:text-blue-700" onClick={() => openModal(item)}>
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232] hover:text-blue-700'>{item.title}</p>
            </div>
             ))}
        {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg overflow-y-auto shadow-xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{selectedItem.title}</h2>
            <p className="text-gray-600 mb-6 whitespace-pre-wrap">{selectedItem.details}</p>
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

export default Services;
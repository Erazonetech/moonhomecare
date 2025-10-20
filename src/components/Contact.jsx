import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import ContactImg from '../assets/contact.svg';


emailjs.init("E8bR1zKMFdzmcfqwG"); // Replace with your EmailJS Public Key
function Contact() {
  // const [name, setName] = useSt
  
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

 const [status, setStatus] = useState('');
  // const form = useRef();

 const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


 const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Send email using EmailJS
        emailjs.send(
          'service_ip2yv5r', // Replace with your EmailJS Service ID
          'template_hsbxaen', // Replace with your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send email. Please try again.');
        });
      };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_ip2yv5r', 'template_xio32pd', form.current, {
  //       publicKey: 'E8bR1zKMFdzmcfqwG',
  //     })
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //     setName('');
  //     setEmail('');
  //     setSubject('');
  //     setMessage('');
  // };

  return (
    <div id="contact" className='max-w-[1200px] mx-auto my-40'>
        <div className='text-center'>
            <h3 className='text-4xl md:text-5xl text-[#0079FF] font-bold'>Contact</h3>
            <h4 className='text-lg md:text-xl text-gray-600 mt-2 font-light'>Contact us using the form below if you have any questions.</h4>
        </div>
        <div className='grid md:grid-cols-2 items-center mt-16 md:mt-28'>
          {/* image */}
          <img  className='w-3/4 md:w-full mx-auto md:mr-auto' src={ContactImg} alt="contact" />
          {/* grid */}
          <div className="mt-10 md:mt-0 md:ml-10 text-center">
            <h3 className='text-xl font-bold'>Contact Information</h3>
            <h4 className='text-gray-500 '>Enter your information to contact us</h4>
            <form onSubmit={handleSubmit} className='w-full'>
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm w-full"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm w-full"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm resize-none h-32 w-full"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
             {status && (
              <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
    </div>
  );
}

export default Contact;
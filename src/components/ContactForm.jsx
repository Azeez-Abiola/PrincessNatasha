import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="p-6 max-w-[1440px] mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p className='w-80'>I'd love to hear from you! Be it a question or just want to say hi, feel free to drop a message.</p>
          <div className="mt-4">
            <p><FaEnvelope className="inline mr-2" />hello@reallygreatsite.com</p>
            <p><FaPhone className="inline mr-2" /> (123) 456 7890</p>
            <p><FaMapMarkerAlt className="inline mr-2" /> Lagos State, Nigeria</p>
          </div>
        </div>
        <form className="w-full md:w-1/2" onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await fetch('https://princess-natasha-g1y8.vercel.app/send_mail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                message,
              }),
            });

            if (!response.ok) {
              throw new Error('Failed to send message');
            }

            const result = await response.json();
            toast.success('Message was sent successfully!');
          } catch (error) {
            console.error(error);
            toast.error('Failed to send message');
          }
        }}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" required />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" required />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-3 mb-4 rounded bg-gray-200 text-black h-32" required></textarea>
          <button className="w-full p-3 rounded bg-[#44BBA4] text-white transform transition-transform duration-300 hover:scale-105 hover:bg-[#2e8b7a] hover:text-[#fff] hover:border-[#44BBA4] hover:border" type="submit">
            Send Message <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
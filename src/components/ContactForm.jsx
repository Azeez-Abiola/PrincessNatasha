import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
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

      await response.json();
      toast.success('Message was sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message');
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="w-5 h-5 mr-3 text-[#44BBA4]" />
                <span>hello@reallygreatsite.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhone className="w-5 h-5 mr-3 text-[#44BBA4]" />
                <span>(123) 456 7890</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-[#44BBA4]" />
                <span>Lagos State, Nigeria</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#44BBA4] focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#44BBA4] focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#44BBA4] focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#44BBA4] text-white py-2 px-4 rounded-md hover:bg-[#2e8b7a] transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
              <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
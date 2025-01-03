import PropTypes from 'prop-types';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_i0csveq',
      'template_gb94tnv',
      templateParams,
      'GWQFdfsMr_Tjdvjkn'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    });
  }

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get in touch with us for any questions or inquiries
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div 
            className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}
          >
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full transform transition-transform duration-300 hover:rotate-12 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>shrihari1363@gmail.com</p>
            </div>
          </div>

          {/* Location Card */}
          <div 
            className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}
          >
            <div className="text-center">
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full transform transition-transform duration-300 hover:rotate-12 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Chennai,Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm border-2 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 transition-colors duration-200`}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm border-2 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 transition-colors duration-200`}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm border-2 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 transition-colors duration-200`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send Message
            </button>

            {/* Success Message */}
            {success && (
              <div className="mt-4 animate-slide-in overflow-hidden">
                <div className={`p-4 rounded-md ${isDarkMode ? 'bg-green-800' : 'bg-green-100'} flex items-center space-x-2`}>
                  <svg 
                    className={`w-6 h-6 ${isDarkMode ? 'text-green-200' : 'text-green-500'} animate-bounce`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className={isDarkMode ? 'text-green-200' : 'text-green-700'}>
                    Message sent successfully!
                  </span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-4 animate-slide-in overflow-hidden">
                <div className={`p-4 rounded-md ${isDarkMode ? 'bg-red-800' : 'bg-red-100'} flex items-center space-x-2`}>
                  <svg 
                    className={`w-6 h-6 ${isDarkMode ? 'text-red-200' : 'text-red-500'} animate-pulse`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className={isDarkMode ? 'text-red-200' : 'text-red-700'}>
                    Failed to send message. Please try again.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;
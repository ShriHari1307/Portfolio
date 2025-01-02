import { useState } from "react";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";

export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_i0csveq",
        "template_gb94tnv",
        formData,
        "GWQFdfsMr_Tjdvjkn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });

          // Hide success message after 3 seconds
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`h-screen flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? "bg-gray-950 text-gray-200" : "bg-gray-200 text-gray-800"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-md transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-4xl font-bold text-center mb-6 ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {success && (
          <p
            className={`mt-4 text-center p-2 rounded-md transition-opacity duration-1000 ${
              isDarkMode
                ? "bg-green-900 text-green-300"
                : "bg-green-100 text-green-600"
            }`}
          >
            Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

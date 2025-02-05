import { useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nMessage: ${formData.message}`);
    // Here you can integrate an API to send the message
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-13 z-5">
      <h2 className="text-4xl text-white font-bold mb-6">Contact Me</h2>
      
      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col glass-effect p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <label className="mb-2 text-lg text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />

        <label className="mb-2 text-lg text-white">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Write your message here..."
        ></textarea>

        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-8 text-white">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-3xl hover:text-red-500 transition duration-300" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl hover:text-blue-600 transition duration-300" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="text-3xl hover:text-yellow-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
}

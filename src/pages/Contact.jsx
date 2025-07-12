// src/pages/Contact.jsx
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 "
    >
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-12 text-center">📬 Contact Me</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Panel */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FiMail className="text-blue-600 text-2xl" />
            <a href="mailto:jaymangukiya032@gmail.com" className="hover:underline">
              jaymangukiya032@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone className="text-blue-600 text-2xl" />
            <p>+91 99090 11082</p>
          </div>
          <div className="flex items-center gap-4">
            <FiMapPin className="text-blue-600 text-2xl" />
            <p>Surat, Gujarat, India</p>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/jay-mangukiya-a1512423a/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com/jaymangukiya07" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
            <a href="/Jay_Mangukiya_Resume.pdf" download className="text-blue-500 hover:underline">Download Resume</a>
          </div>

          {/* Handshake Image */}
          <img
            src="/handshake.jpg"
            alt="Handshake"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-xl mx-auto mt-8"
          />
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div>
            <label className="block mb-2 font-semibold text-sm">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-lg transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

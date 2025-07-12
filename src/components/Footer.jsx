// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 pt-16 pb-8 px-6 mt-20 border-t dark:border-gray-700 transition">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 relative">
            Contact
            <span className="block w-8 h-1 bg-blue-500 mt-1 rounded"></span>
          </h2>
          <p className="text-sm mb-1">Jay Mangukiya</p>
          <p className="text-sm mb-1">Email: <a href="mailto:jaymangukiya032@gmail.com" className="text-blue-600 hover:underline">jaymangukiya032@gmail.com</a></p>
          <p className="text-sm mb-1">Phone: +91 99090 11082</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 relative">
            Quick Links
            <span className="block w-8 h-1 bg-blue-500 mt-1 rounded"></span>
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-blue-500 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            <li><Link to="/resume" className="hover:text-blue-500 transition">Resume</Link></li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 relative">
            Location
            <span className="block w-8 h-1 bg-blue-500 mt-1 rounded"></span>
          </h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948954.0628246876!2d71.2013977625!3d21.708478785853348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0475eca65f9d5%3A0xb35467b53efd304!2sRajeshwari%20Residency!5e0!3m2!1sen!2sin!4v1752301555183!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400 border-t pt-6 dark:border-gray-700">
        © {new Date().getFullYear()} <span className="text-blue-600 dark:text-blue-400">Jay Mangukiya</span>. All rights reserved.
      </div>
    </footer>
  );
}

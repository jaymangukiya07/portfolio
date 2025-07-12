// src/components/FloatingButtons.jsx
import { FaPhoneAlt, FaComments, FaBell } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Call for Free Demo */}
      <a
        href="tel:+919909011082"
        className="flex items-center gap-2 bg-blue-600 text-cyan-50 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        title="Call for Free Demo"
      >
        <FaBell /> Free Demo
      </a>

      {/* Call for Service */}
      <a
        href="tel:+919909011082"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
        title="Call for Service"
      >
        <FaPhoneAlt /> Service
      </a>

      {/* Send Message */}
      <a
        href="/contact"
        className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition"
        title="Send a Message"
      >
        <FaComments /> Message
      </a>
    </div>
  );
}

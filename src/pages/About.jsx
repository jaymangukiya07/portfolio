// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaMale, FaFemale } from 'react-icons/fa';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="px-6 py-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center underline underline-offset-8">About Me</h1>

        {/* Flex Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Jay Mangukiya"
              className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover shadow-xl border-4 border-blue-500"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              👋 Hi, I’m <span className="font-semibold text-blue-600 dark:text-blue-300">Jay Mangukiya</span>, a Full Stack Web Developer passionate about crafting clean and scalable web applications using technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            <p className="text-lg leading-relaxed">
              I love writing clean, maintainable code and solving complex problems. My development journey has been fueled by curiosity and a passion for innovation.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">💼 Skills</h2>
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>Languages: JavaScript, HTML5, CSS3</li>
                <li>Frontend: React, Tailwind CSS, Vite</li>
                <li>Backend: Node.js, Express.js</li>
                <li>Database: MongoDB, MySQL</li>
                <li>Tools: Git, GitHub, Postman, VS Code</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">📅 Timeline</h2>
              <div className="border-l-4 border-blue-500 pl-4 space-y-4">
                <div>
                  <p className="font-semibold">2022 - Started Web Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Learned HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <p className="font-semibold">2023 - Learned React & Node.js</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Built full-stack MERN projects</p>
                </div>
                <div>
                  <p className="font-semibold">2024 - Portfolio & Advanced Skills</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Deployed apps, built this site</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">🌟 Achievements</h2>
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>Built this modern portfolio site</li>
                <li>Contributed to open-source</li>
                <li>Completed web development courses</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">📚 Education</h2>
              <p className="text-lg">
                Pursuing B.E. in Computer Engineering from Gujarat Technological University, with a focus on full-stack development.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">💡 Interests</h2>
              <p className="text-lg">
                I love UI/UX design, tech content, building side projects, and playing cricket. Always open to learning and collaboration!
              </p>
            </div>

            <p className="text-lg">
              Want to collaborate or connect? Visit the <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link> page or check out my <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center text-blue-600 dark:text-blue-400 mb-6">💬 Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Male */}
            <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3 text-blue-800 dark:text-blue-300">
                <FaMale className="text-2xl mr-2" />
                <h3 className="font-semibold">Ravi Shah</h3>
              </div>
              <p className="text-sm italic text-gray-700 dark:text-gray-100">
                “Jay is a sharp, reliable developer. He consistently delivers high-quality code and has a strong eye for detail.”
              </p>
            </div>

            {/* Female */}
            <div className="bg-pink-100 dark:bg-pink-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3 text-pink-800 dark:text-pink-300">
                <FaFemale className="text-2xl mr-2" />
                <h3 className="font-semibold">Sneha Patel</h3>
              </div>
              <p className="text-sm italic text-gray-700 dark:text-gray-100">
                “Working with Jay was a pleasure! His communication and full-stack problem-solving skills are top-notch.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

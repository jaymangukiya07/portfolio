// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 flex flex-col items-center justify-center text-center">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-10 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 transition-all duration-500">
        
        {/* Left Content */}
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-gray-900 dark:text-blue-300">Hi,</span>{' '}
            <span className="text-blue-700 dark:text-blue-400">I'm Jay Mangukiya</span>
          </h1>

          <p className="text-lg leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-300">Jay Mangukiya</span>, a dedicated and passionate Full-Stack Web Developer.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I specialize in responsive web apps using React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I enjoy crafting clean UIs and backend logic. I'm exploring advanced React and backend scaling.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            When not coding, I follow design trends, learn frameworks, and build real-world projects.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Link
              to="/resume"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              View My Resume
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 border border-blue-600 bg-white text-blue-700 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-60 h-60 object-cover rounded-full shadow-2xl border-4 border-blue-600"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-16">
        {[
          { name: 'React', src: 'react/react-original.svg' },
          { name: 'JavaScript', src: 'javascript/javascript-original.svg' },
          { name: 'Node.js', src: 'nodejs/nodejs-original-wordmark.svg' },
          { name: 'Tailwind CSS', src: 'tailwindcss/tailwindcss-original.svg' },
          { name: 'HTML5', src: 'html5/html5-original.svg' },
          { name: 'CSS3', src: 'css3/css3-original.svg' },
        ].map((skill, index) => (
          <div key={index} className="relative group p-4 rounded-2xl shadow-inner bg-white/30 dark:bg-gray-700/30 backdrop-blur-md">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.src}`}
              alt={skill.name}
              className="h-10 transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Jay Mangukiya. All rights reserved.</p>
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </section>
  );
}

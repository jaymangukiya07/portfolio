import Tilt from 'react-parallax-tilt';


export default function Project() {
  return (
<div className="p-8 text-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Projects</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Here are some of my recent projects showcasing my skills in web development.
        </p>

  < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105">
    <img src="/portfolio-logo.jpg" alt="Project 1" className="rounded-md mb-3" />
    <h3 className="text-xl font-semibold mb-1 text-blue-600">Portfolio Website</h3>
    <p className="text-sm text-white dark:text-gray-300 mb-2">
      A personal portfolio using React and Tailwind with animated routes.
    </p>
    <div className="flex flex-wrap gap-2 text-sm mb-3">
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Tailwind</span>
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Vite</span>
    </div>
    <div className="flex gap-4">
      <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
      <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
    </div>
  </div>

    <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105">
        <img src="/project2.jpg" alt="Project 2" className="rounded-md mb-3" />
        <h3 className="text-xl font-semibold mb-1 text-blue-600">E-commerce App</h3>
        <p className="text-sm text-white dark:text-gray-300 mb-2">
        A full-stack e-commerce application with user authentication and payment integration.
        </p>
        <div className="flex flex-wrap gap-2 text-sm mb-3">
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
        </div>
        <div className="flex gap-4">
        <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
        <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
        </div>
    </div>

    <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105">
    <img src="/project3.jpg" alt="Project 3" className="rounded-md mb-3" />
    <h3 className="text-xl font-semibold mb-1 text-blue-600">
        Blogging Platform   
    </h3>
    <p className="text-sm text-white dark:text-gray-300 mb-2">
        A blogging platform with user authentication, post creation, and commenting features.   
    </p>
    <div className="flex flex-wrap gap-2 text-sm mb-3">     
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Express</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
    </div>
    <div className="flex gap-4">
        <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
        <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
        </div>
    </div>

  <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105">
    <img src="/project4.jpg" alt="Project 4" className="rounded-md mb-3" />
    <h3 className="text-xl font-semibold mb-1 text-blue-600">   Weather App</h3>
    <p className="text-sm text-white dark:text-gray-300 mb-2">
      A weather application that fetches real-time data from a public API and displays it in a user-friendly interface.
    </p>          
    <div className="flex flex-wrap gap-2 text-sm mb-3">
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">API Integration</span>
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">CSS</span>
      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">JavaScript</span>
    </div>
    <div className="flex gap-4">    
        <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
        <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
        </div>
    </div>

    <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105"> 
    <img src="/project5.jpg" alt="Project 5" className="rounded-md mb-3" />
    <h3 className="text-xl font-semibold mb-1 text-blue-600">   Task Manager</h3>
    <p className="text-sm text-white dark:text-gray-300 mb-2">
        A task management application with user authentication, task creation, and deadline tracking.
    </p>
    <div className="flex flex-wrap gap-2 text-sm mb-3"> 
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Express</span>
    </div>
    <div className="flex gap-4">
        <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
         <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
        </div>
    </div>

    <div className="bg-black dark:bg-gray-800 p-6 rounded-xl shadow-md 
                transform transition-transform duration-300 hover:scale-105">
    <img src="/project6.jpg" alt="Project 6" className="rounded-md mb-3" />
    <h3 className="text-xl font-semibold mb-1 text-blue-600">
        Social Media App
    </h3>
    <p className="text-sm text-white dark:text-gray-300 mb-2">
        A social media application with user profiles, posts, and real-time notifications.
    </p>
    <div className="flex flex-wrap gap-2 text-sm mb-3">
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Socket.io</span>
    </div>
    <div className="flex gap-4">    
        <a href="https://yourdemo.com" target="_blank" className="text-blue-600 hover:underline">Live Demo</a>
         <a href="https://github.com/yourrepo" target="_blank" className="text-white hover:underline">GitHub</a>
        </div>
    </div>    

   </div>
   
 </div>



  );
}
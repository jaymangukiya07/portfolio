import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#3b3f71] dark:bg-gray-900 shadow-lg z-50 border-b border-gray-800 py-5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="./portfolio/public/portfolio-logo.jpg" alt="Logo" className="h-8 w-8 rounded-md "  />
          <span className="text-4xl font-semibold text-white tracking-wide">
            MyPortfolio
          </span>
        </Link>
        

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-2xl text-white hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about" className="text-2xl font-medium text-white hover:text-yellow-300 transition">
            About
          </Link>
          <Link to="/projects" className="text-2xl font-medium text-white hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link to="/contact" className="text-2xl font-medium text-white hover:text-yellow-300 transition">
            Contact
          </Link>
          <Link to="/resume" className="text-2xl font-medium text-white hover:text-yellow-300 transition">
            Resume
          </Link>
          <Link to="/skills" className="text-2xl font-medium text-white hover:text-yellow-300 transition">
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
}

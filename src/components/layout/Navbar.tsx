import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Product", "About", "Services", "Contact"];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="md:w-4/5 mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/img/logo.jpeg" alt="Logo" className="h-15 w-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-20 items-center">
          {links.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Search Box */}
          <div className="flex items-center px-4 py-2 bg-white border rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 max-w-xs">
            <FiSearch className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-4 pl-8 space-y-6 bg-white border-t">
          {links.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-gray-700 hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Mobile Search */}
          <div className="flex items-center px-4 py-2 bg-white border rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 mt-4">
            <FiSearch className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

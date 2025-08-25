import { FiSearch } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img src="/logo.svg" alt="Logo"/>
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-15">
                    {['Home', 'Product', 'About', 'Services', 'Contact'].map((item) => (
                        <NavLink
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-sm font-medium hover:text-blue-600 ${isActive ? 'text-blue-600 underline' : 'text-gray-700'
                                }`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </nav>

                {/* Search Button */}
                <div className="flex items-center px-4 py-2 bg-white border rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 max-w-xs">
                    <FiSearch className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    />
                </div>

            </div>
        </header>
    );
};

export default Navbar;

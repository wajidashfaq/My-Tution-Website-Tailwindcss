import React, { useState, useEffect, useRef } from 'react';

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
            <div className="flex space-x-4">
                <a href="/" className="hover:text-gray-200">Home</a>
                <a href="/about" className="hover:text-gray-200">About Us</a>
                <a href="/contact" className="hover:text-gray-200">Contact Us</a>
            </div>
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={toggleDropdown}
                    className="hover:text-gray-200 focus:outline-none"
                >
                    Courses
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                        <a
                            href="/math"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Math
                        </a>
                        <a
                            href="/economics"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Economics
                        </a>
                        <a
                            href="/accounting"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Accounting
                        </a>
                        <a
                            href="/business-studies"
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            Business Studies
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;

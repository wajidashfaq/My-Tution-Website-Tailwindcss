import React, { useState } from "react";

const Navbar = () => {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isOnlineClassDropdownOpen, setIsOnlineClassDropdownOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Left-side Navigation Links */}
      <div className="flex space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>

      {/* Right-side Dropdowns */}
      <div className="flex space-x-4">
        {/* Courses Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsCoursesDropdownOpen(true)}
          onMouseLeave={() => setIsCoursesDropdownOpen(false)}
        >
          <button className="px-4 py-2 bg-white-600 rounded-md hover:bg-blue-700">
            Courses
          </button>
          {isCoursesDropdownOpen && (
            <div className="absolute right-0 bg-white text-black rounded-md shadow-lg">
              <a href="#math" className="block px-4 py-2 hover:bg-gray-200">Math</a>
              <a href="#economics" className="block px-4 py-2 hover:bg-gray-200">Economics</a>
              <a href="#accounting" className="block px-4 py-2 hover:bg-gray-200">Accounting</a>
              <a href="#business" className="block px-4 py-2 hover:bg-gray-200">Business Studies</a>
            </div>
          )}
        </div>

        {/* Online Class Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsOnlineClassDropdownOpen(true)}
          onMouseLeave={() => setIsOnlineClassDropdownOpen(false)}
        >
          <button className="px-4 py-2 bg-white-600 rounded-md hover:bg-blue-700">
            Online Class
          </button>
          {isOnlineClassDropdownOpen && (
            <div className="absolute right-0 bg-white text-black rounded-md shadow-lg">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
              >
                Demo Class
              </button>
              <a href="#routine" className="block px-4 py-2 hover:bg-gray-200">Routine Class</a>
            </div>
          )}
        </div>
      </div>

      {/* Video Call Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 max-w-lg rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Video Call</h2>
            <p className="mb-4">This is your demo class video call simulation!</p>
            <iframe
              title="Demo Class"
              src="https://meet.jit.si/DemoClassVideoCall"
              className="w-full h-64 border rounded-md"
            ></iframe>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              >
                End Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

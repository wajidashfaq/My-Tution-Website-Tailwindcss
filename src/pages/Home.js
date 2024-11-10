import React, { useState } from 'react';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    closeModal();
  };

  return (
    <div className="text-center">
      {/* APPLY NOW Button */}
      <div className="flex justify-center mt-6 mb-6">
        <button
          className="bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg hover:bg-blue-700 shadow-lg"
          onClick={openModal}
        >
          APPLY NOW
        </button>
      </div>

      {/* Main Heading and Subtitle */}
      <h1 className="text-5xl font-bold mb-2">Welcome to Our Tuition Center</h1>
      <p className="text-lg mb-6">We offer tutoring in Math, Economics, Accounting, and Business Studies.</p>

      {/* Image Section */}
      <div className="mb-6">
        <img
          src="/images/banner.jpg"
          alt="Tuition Center Banner"
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Additional Content */}
      <p className="text-lg mt-6">Explore our courses and join us for a better learning experience!</p>

      {/* Modal with Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="date"
                placeholder="D.O.B"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Qualification"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="tel"
                placeholder="Call"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit Form
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

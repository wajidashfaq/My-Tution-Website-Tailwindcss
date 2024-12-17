import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl font-bold">About Our Tuition Center</h1>
          <p className="text-lg mt-2">Where Learning Meets Excellence</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mt-4">
          At our tuition center, we are committed to empowering students with knowledge, skills, and confidence.
          Our mission is to provide personalized tutoring that inspires success and a love for learning.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Meet Our Tutors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Example Tutor Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-tutor-photo.jpg" alt="Tutor Name" className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Math Tutor</p>
              <p className="text-gray-500 mt-2">John has over 10 years of experience in teaching math, helping students understand complex concepts easily.</p>
            </div>
          </div>
          {/* Add more tutor cards here */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Experienced Tutors</h3>
              <p className="text-gray-600 mt-2">Our tutors are experts in their fields with years of teaching experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Personalized Learning</h3>
              <p className="text-gray-600 mt-2">We provide customized learning plans tailored to each student’s needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Proven Results</h3>
              <p className="text-gray-600 mt-2">Our students consistently achieve high scores and academic success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Supportive Environment</h3>
              <p className="text-gray-600 mt-2">We foster a positive and encouraging atmosphere for learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-8 text-center">
        <h2 className="text-2xl font-semibold">Ready to Start Your Journey with Us?</h2>
        <p className="text-gray-300 mt-2">Explore our courses and get the support you need to excel!</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Explore Courses
        </button>
      </section>
    </div>
  );
};

export default AboutUs;

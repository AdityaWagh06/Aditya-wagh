import React, { useState, useEffect } from "react";

const Home = () => {
  const roles = [
    "Frontend Developer", 
    "AI/ML Enthusiast", 
    "Tech Innovator", 
    "React Developer", 
    "Machine Learning Practitioner"
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center -mt-20">
      <div className="px-4">
        {/* Greeting */}
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Web Developer
        </h1>

        {/* Dynamic Roles */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          <span className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {roles[currentRole]}
          </span>
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Crafting Innovative Digital Solutions through Code and Creativity
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="#about" 
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
          >
            About Me
          </a>
          <a 
            href="#portfolio" 
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
          >
            Portfolio
          </a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/AdityaWagh06"
            className="text-2xl p-3 rounded-full bg-gray-800 hover:bg-purple-500 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-wagh25/"
            className="text-2xl p-3 rounded-full bg-gray-800 hover:bg-purple-500 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/_adityawagh_7?igsh=MTh5bndxczl4bGVocg=="
            className="text-2xl p-3 rounded-full bg-gray-800 hover:bg-purple-500 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
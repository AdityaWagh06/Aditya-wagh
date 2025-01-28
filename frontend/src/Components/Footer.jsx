import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-lg">You can reach me at: <a href="mailto:adityawagh2525@gmail.com" className="text-indigo-400 hover:text-indigo-600">adityawagh2525@gmail.com</a></p>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <a href="https://github.com/AdityaWagh06" className="text-2xl px-4 py-2 hover:text-indigo-400 transition duration-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-wagh25" className="text-2xl px-4 py-2 hover:text-indigo-400 transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/_adityawagh_7?igsh=MTh5bndxczl4bGVocg==" className="text-2xl px-4 py-2 hover:text-indigo-400 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          <p>&copy; 2025 Aditya Wagh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

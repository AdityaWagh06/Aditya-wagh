import React from 'react';
import Background from '../Components/Background';

const Education = () => {
  return (
    
      <div className="container mx-auto px-6 py-20 lg:py-0 pt-0">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-white">Education</h2>
        <div className="relative">
          <div className="border-l-4 border-purple-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="relative bg-gray-800 p-6 shadow-slate-800 shadow-2xl rounded-lg  w-3/4 ml-auto">
              <h3 className="text-2xl font-semibold text-purple-500 mb-2">B.Tech in AIML</h3>
              <p className="text-gray-300">Vishwakarma Institute of Information Technology, Pune (2026)</p>
              <span className="absolute top-1/2 left-0 -ml-4 w-8 h-8 bg-purple-500 rounded-full"></span>
            </div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-slate-800 shadow-2xl w-3/4 mr-auto">
              <h3 className="text-2xl font-semibold text-purple-500 mb-2">HSC</h3>
              <p className="text-gray-300">Trimurti College Shrirampur (2022)</p>
              <span className="absolute top-1/2 right-0 -mr-4 w-8 h-8 bg-purple-500 rounded-full"></span>
            </div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-slate-800 shadow-2xl w-3/4 ml-auto">
              <h3 className="text-2xl font-semibold text-purple-500 mb-2">SSC</h3>
              <p className="text-gray-300">St. Xavier's School Shrirampur (2020)</p>
              <span className="absolute top-1/2 left-0 -ml-4 w-8 h-8 bg-purple-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Education;
import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-purple-900 to-gray-900 text-white">
      {children}
    </div>
  );
};

export default Background;
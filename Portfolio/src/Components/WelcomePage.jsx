import React, { useState, useEffect } from "react";

const WelcomePage = ({ children }) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldShrink, setShouldShrink] = useState(false);
  const welcomeText = "Welcome to My Portfolio Website".split(" ");

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setVisibleWords((prev) => {
        const nextWords = [...prev, welcomeText[prev.length]];
        if (nextWords.length === welcomeText.length) {
          clearInterval(wordTimer);
          setTimeout(() => {
            setShouldShrink(true);
            setTimeout(() => setIsComplete(true), 1000);
          }, 1200);
        }
        return nextWords;
      });
    }, 600);

    const scrollTimer = setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
    }, 6500);

    return () => {
      clearInterval(wordTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return isComplete ? children : (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div 
          className={`text-7xl font-extralight text-white text-center tracking-wider transition-all duration-1000 mb-12 ${
            shouldShrink ? 'transform scale-50 opacity-0' : ''
          }`}
        >
          {visibleWords.join(" ")}
          <span className="animate-pulse text-gray-400">|</span>
        </div>
        <div 
          className={`text-3xl text-gray-300 opacity-0 transition-all duration-1000 delay-500 ${
            visibleWords.length === welcomeText.length ? 'opacity-100' : ''
          }`}
        >
          Explore My Digital Journey
        </div>
        <div 
          className={`mt-6 w-24 h-1 bg-white opacity-0 transition-all duration-1000 delay-700 ${
            visibleWords.length === welcomeText.length ? 'opacity-100' : ''
          }`}
        ></div>
      </div>
      <div className="absolute bottom-12 left-0 w-full text-center text-gray-400 text-sm animate-bounce">
        Scroll to Begin Your Exploration
      </div>
    </div>
  );
};

export default WelcomePage;
import React, { useState, useEffect } from "react";

const WelcomePage = ({ children }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldShrink, setShouldShrink] = useState(false);
  
  const welcomeText = "Welcome to My Portfolio Website".split("");

  useEffect(() => {
    let currentIndex = 0;
    
    const letterTimer = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setVisibleLetters(prev => [...prev, welcomeText[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(letterTimer);
        setTimeout(() => {
          setShouldShrink(true);
          setTimeout(() => setIsComplete(true), 1000);
        }, 1200);
      }
    }, 100); // Reduced interval for smoother animation

    const scrollTimer = setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
    }, 6500);

    return () => {
      clearInterval(letterTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return isComplete ? children : (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className={`text-7xl font-extralight text-center tracking-wider transition-all duration-1000 ${
            shouldShrink ? 'transform scale-50 opacity-0' : ''
          }`}
        >
          <span className="inline-flex flex-wrap justify-center">
            {visibleLetters.map((letter, index) => (
              <span
                key={index}
                className="text-white opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="animate-pulse text-gray-400">|</span>
        </div>
        <div
          className={`text-3xl text-gray-300 opacity-0 transition-all duration-1000 delay-500 ${
            visibleLetters.length === welcomeText.length ? 'opacity-100' : ''
          }`}
        >
          Explore My Digital Journey
        </div>
        <div
          className={`mt-6 w-24 h-1 bg-white opacity-0 transition-all duration-1000 delay-700 ${
            visibleLetters.length === welcomeText.length ? 'opacity-100' : ''
          }`}
        ></div>
      </div>
      <div className="absolute bottom-12 left-0 w-full text-center text-gray-400 text-sm animate-bounce">
        Scroll to Begin Your Exploration
      </div>
    </div>
  );
};

// Add this to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;
document.head.appendChild(style);

export default WelcomePage;
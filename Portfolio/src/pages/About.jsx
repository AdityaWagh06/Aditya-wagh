import React from "react";

const About = () => {
  const skills = ["React", "JavaScript", "Node.js", "Tailwind"];

  return (
    <div className="min-h-screen flex flex-col pt-32 sm:pt-48">
      <div className="text-center -mt-24 sm:-mt-36">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>

        {/* Personal Introduction */}
        <div className="max-w-3xl mx-auto text-gray-300 px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white">
            Hi, I am <span className="text-purple-500">Aditya Wagh</span>
          </h1>
          <p className="mb-6 text-lg sm:text-xl">
            A passionate Computer Science student specializing in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. I love crafting innovative web applications and exploring advanced AI technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm sm:text-base hover:bg-purple-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="mt-8 text-center">
          <a
            href="/Aditya Wagh Resume.pdf"
            download
            className="inline-block bg-indigo-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

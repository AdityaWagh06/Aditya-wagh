import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of projects visible
  const [visibleCertificates, setVisibleCertificates] = useState(3); // Initial number of certificates visible
  const [visibleSkills, setVisibleSkills] = useState(5); // Initial number of skills visible

  const projects = [
    {
      title: "Educational Website for Skill Development",
      technologies: [
        { class: "fab fa-react", color: "text-blue-400", name: "React" },
        { class: "fab fa-css3-alt", color: "text-blue-500", name: "CSS3" },
        { class: "fab fa-js-square", color: "text-yellow-400", name: "JavaScript" },
      ],
      description:
        "An engaging and responsive web platform aimed at enhancing skill development for children aged 6-16.",
      github: "https://github.com/AdityaWagh06/educational-website-.git",
    },
    {
      title: "Facial Emotion Recognition",
      technologies: [
        { class: "fab fa-python", color: "text-green-400", name: "Python" },
        { class: "fas fa-flask", color: "text-gray-400", name: "Flask" },
        { class: "fas fa-brain", color: "text-purple-400", name: "TensorFlow" },
      ],
      description:
        "Web-based emotion detection system using Flask with real-time and image-based emotion analysis.",
      github: "https://github.com/AdityaWagh06/FacialEmotionRecognition.git",
    },
    {
      title: "Employee Management System",
      technologies: [
        { class: "fab fa-react", color: "text-blue-400", name: "React" },
        { class: "fab fa-node-js", color: "text-green-400", name: "Node.js" },
        { class: "fab fa-css3-alt", color: "text-blue-500", name: "CSS3" },
      ],
      description:
        "Developed a web application to manage employee data, including adding, editing, and deleting employee records.",
      github: "https://github.com/AdityaWagh06/EmployeeMangementSystem.git",
    },
    {
      title: "Netflix Clone",
      technologies: [
        { class: "fab fa-react", color: "text-blue-400", name: "React" },
        { class: "fab fa-node-js", color: "text-green-400", name: "Node.js" },
        { class: "fab fa-css3-alt", color: "text-blue-500", name: "CSS3" },
      ],
      description:
        "A Netflix-inspired web application showcasing dynamic content rendering.",
      github: "https://github.com/AdityaWagh06/NetflixClone.git",
    },
    {
      title: "Weather Forecast Application",
      technologies: [
        { class: "fab fa-js-square", color: "text-yellow-400", name: "JavaScript" },
        { class: "fab fa-css3-alt", color: "text-blue-500", name: "CSS3" },
        { class: "fas fa-cloud-sun", color: "text-gray-500", name: "API Integration" },
      ],
      description:
        "A weather forecast app displaying real-time data using OpenWeatherMap API.",
      github: "https://github.com/AdityaWagh06/weather-app.git",
    },
  ];

  const certificates = [
    { title: "Full Stack Software Developer", image: "/image1.png" },
    { title: "Git and GitHub", image: "/image2.png" },
    { title: "Machine Learning with Python", image: "/image3.png" },
    { title: "React.js Certification", image: "/image4.png" },
    { title: "Backend Development with Node.js", image: "/image5.png" },
    { title: "Web Design Fundamentals", image: "/image6.png" },
  ];

  const skills = [
    { name: "React", class: "fab fa-react", color: "text-blue-400" },
    { name: "HTML5", class: "fab fa-html5", color: "text-orange-400" },
    { name: "CSS3", class: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "Node.js", class: "fab fa-node-js", color: "text-green-400" },
    { name: "JavaScript", class: "fab fa-js-square", color: "text-yellow-400" },
    { name: "Git", class: "fab fa-git-square", color: "text-red-400" },
    { name: "MongoDB", class: "fas fa-database", color: "text-green-500" },
    { name: "Python", class: "fab fa-python", color: "text-blue-500" },
    { name: "Express.js", class: "fas fa-code", color: "text-gray-500" },
    { name: "C++", class: "fas fa-laptop-code", color: "text-purple-500" },
    { name: "C", class: "fas fa-terminal", color: "text-blue-500" },
  ];

  const loadMoreCertificates = () => {
    setVisibleCertificates((prev) => prev + 3);
  };

  const viewLessCertificates = () => {
    setVisibleCertificates(3);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  const viewLessProjects = () => {
    setVisibleProjects(3);
  };

  const loadMoreSkills = () => {
    setVisibleSkills((prev) => prev + 5);
  };

  const viewLessSkills = () => {
    setVisibleSkills(5);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "projects") {
      setVisibleProjects(3);
    }
    if (tab === "certificates") {
      setVisibleCertificates(3);
    }
    if (tab === "techstack") {
      setVisibleSkills(5);
    }
  };

  return (
    <div className="container mx-auto py-10 px-6">
      {/* Tabs */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-white mb-6">Portfolio Section</h2>
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => handleTabChange("projects")}
            className={`text-lg font-semibold px-4 py-2 rounded border-2 ${
              activeTab === "projects"
                ? "bg-purple-500 text-white border-purple-500"
                : "text-gray-300 border-gray-500 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleTabChange("certificates")}
            className={`text-lg font-semibold px-4 py-2 rounded border-2 ${
              activeTab === "certificates"
                ? "bg-purple-500 text-white border-purple-500"
                : "text-gray-300 border-gray-500 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => handleTabChange("techstack")}
            className={`text-lg font-semibold px-4 py-2 rounded border-2 ${
              activeTab === "techstack"
                ? "bg-purple-500 text-white border-purple-500"
                : "text-gray-300 border-gray-500 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Tech Stack
          </button>
        </div>
      </div>

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-slate-800 shadow-2xl hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex space-x-3 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center justify-center"
                    >
                      <i className={`${tech.class} ${tech.color} text-3xl`}></i>
                      <span className="absolute bottom-0 mb-6 hidden group-hover:block text-xs bg-black text-white py-1 px-2 rounded">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-white mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {visibleProjects < projects.length && (
              <button
                onClick={loadMoreProjects}
                className="px-6 py-2 bg-purple-500 text-white rounded-full mr-4 hover:bg-purple-700 transition"
              >
                View More
              </button>
            )}
            {visibleProjects > 3 && (
              <button
                onClick={viewLessProjects}
                className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition"
              >
                View Less
              </button>
            )}
          </div>
        </div>
      )}

      {/* Certificates Tab */}
      {activeTab === "certificates" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.slice(0, visibleCertificates).map((certificate, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-slate-800 shadow-2xl hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-300"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-white">
                  {certificate.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {visibleCertificates < certificates.length && (
              <button
                onClick={loadMoreCertificates}
                className="px-6 py-2 bg-purple-500 text-white rounded-full mr-4 hover:bg-purple-700 transition"
              >
                View More
              </button>
            )}
            {visibleCertificates > 3 && (
              <button
                onClick={viewLessCertificates}
                className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition"
              >
                View Less
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tech Stack Tab */}
      {activeTab === "techstack" && (
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            {skills.slice(0, visibleSkills).map((skill, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                <i className={`${skill.class} ${skill.color} text-5xl mb-4`}></i>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {visibleSkills < skills.length && (
              <button
                onClick={loadMoreSkills}
                className="px-6 py-2 bg-purple-500 text-white rounded-full mr-4 hover:bg-purple-700 transition"
              >
                View More
              </button>
            )}
            {visibleSkills > 5 && (
              <button
                onClick={viewLessSkills}
                className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition"
              >
                View Less
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

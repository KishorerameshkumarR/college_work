import React from "react";
import "./App.css";
import profileImage from "./EAGLE-12262022.png"; // Add your image file in the src folder

const App = () => {
  const projects = [
    {
      title: "Kitchen chaos",
      description: "A 3D Game developed in Unity",
      link: "https://drive.google.com/file/d/1DTJVnQKy-YSfLm1N7NvnemjC1C294pX_/view?usp=sharing",
    },
    {
      title: "Stock Market Prediction",
      description: "A Machine Learning Project.",
      link: "#",
    },

    
  ];

  const skills = [
    "C",
    "C++",
    "C#",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
       
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1>
            Hi, I'm <span className="name">Kishore R.</span>
          </h1>
          <p className="subtitle">
          Game Developer , 3D Modeling , Competitive Programming
                      </p>
          <p className="description">
          Energetic and skilled in game development, I bring a strong foundation in programming and problem-solving to create immersive gaming experiences. With a deep passion for 3D modeling, I thrive on innovation, constantly seeking to push the boundaries of what's possible in game design. I am committed to leveraging cutting-edge technology to solve real-world challenges through engaging and visually compelling games.
          </p>
          <div className="hero-buttons">
            
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>B.Tech (AIDS)</strong> - Sri Eshwar College of Engineering
                (2023-2027) – CGPA: 7.3
              </li>
              <li>
                <strong>HSC and SSLC</strong> - Rajalakshmi Genguswamy Matriculation
                Higher Secondary School (2019-2023)
              </li>
            </ul>
          </div>
          <div className="interests">
            <h3>Interests</h3>
            <p>
              Game Developer , 3D Modeling , Competitive Programming
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-rectangle" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <h2>Achievements</h2>
        <div className="achievements-grid">
        <div className="achievement-card">
            <h3><a href ="https://drive.google.com/file/d/1lLyG7uU11Ib6oIeLDyQjUY6kpoV4xxMY/view?usp=sharing">Unity Essentials Pathway</a> </h3>
            <p>Completed Unity certification in Unity Essentials Pathway .</p>
          </div>
          <div className="achievement-card">
            <h3>3st Place - Yartech Hackathon</h3>
            <p>Secured third place in  hackathon.</p>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2025 Kishore R. | +91 63818 64540 | rameshkumarkishore52@gmail.com 
        </p>
      </footer>
    </div>
  );
};

export default App;
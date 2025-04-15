import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">Code with Purpose</h1>
        <div className="about-left">
          <p>
            I am a first-generation college graduate with a degree in Computer Science from Gettysburg College with a strong foundation in programming, AI, and leadership. 
            I thrive in collaborative environments and have experience leading teams to deliver impactful projects.
            I combine technical expertise with problem-solving and communication skills to create innovative solutions. 
            My goal is to leverage technology to drive positive change and enhance user experiences.
          </p>
        </div>
        <div className="about-right">
          </div>
          <div className='paragraph2'>
          <p>Past roles/experiences </p>
            <ul>
              <li>Mentor at Hack for Accessibility Hackathon 2025</li>
              <li>Backend iOS Developer at Everyone Can Code Chicago 2024</li>
              <li>Consultant extern at Extern x PwC</li>
              <li>Project Manager at Braven x United Airlines Capstone 2023</li>
              <li>Hackathon Participant at Technica 2023</li>

              </ul>
        </div>
        <div className='paragraph3'>
          <p>Skills</p>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Swift</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Flutter/Dart</li>
            <li>Microsoft Azure AI Certified</li>
          </ul>
    </div>
      </div>
  );
};

export default About;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

import SkillChart from './SkillChart';
// import ProgressBars from './ProgressBar';
function Main() {
  return (
    <main>
      <section id="about">
      <h2><i className="fas fa-user"></i> About Me</h2>
        <p>Hi! I'm Apurva Jadhav, a passionate student with a keen interest in software engineering and web development. I'm currently pursuing my Bachelor's degree in Electronics and Computer Science at Fr. Conceicao Rodrigues College of Engineering.</p>
      </section>
      <section id="education">
      <h2><i className="fas fa-graduation-cap"></i> Education</h2>
        <p><strong>Fr. Conceicao Rodrigues College of Engineering</strong>, B.Tech in Electronics and Computer Science, 2023 - 2027</p>
        <p>Relevant Coursework:Algorithms, Object-Oriented Programming, Web Development</p>
      </section>
      <div class="flex-container">
  <div class="block">
    <h2>Web Development</h2>
    <p>Learning new concepts regularly.</p>
  </div>
  <div class="block">
    <h2>Programming</h2>
    <p>Proficient in C and Java.</p>
  </div>
</div>
      <section id="projects">
      <h2><i className="fas fa-project-diagram"></i> Projects</h2>
        <p><strong>Corporate Engagement Program for Fr Angel Ashram and Fr Angel School</strong>: Contributed to an outreach project focusing on community engagement and digital presence.</p>
        <p><strong>React NGO Website</strong>: Developed a website to showcase the mission, founders, and projects of an NGO, focusing on vibrant design and user-friendly functionality.</p>
      </section>
      <section id="skills">
      <h2><i className="fas fa-tools"></i> Skills</h2>
        <SkillChart />
        </section>
      <section id="experience">
      <h2><i className="fas fa-briefcase"></i> Experience</h2>
      <p> My experience spans a diverse range of projects, from web development and mobile app design to exploring algorithms and programming in languages like Java and Python. I thrive in collaborative environments and am driven to apply my skills to real-world challenges, aiming to make a meaningful impact through technology and continuous learning.</p>
        <p><strong>Internship</strong> (Anticipated by June 2025)</p>
        <p>Actively preparing to secure an internship position in software development or related fields to apply my technical skills and gain hands-on experience.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: apurvajadhav011@gmail.com</p>
        <p>Phone: 9321662801</p>
      </section>
      {/* <ProgressBars />  */}
      <section id="download">
  <h2>Download Resume</h2>
  <a href="\Apurva_Jadhav_Resume.docx" download="Apurva_Jadhav_Resume(1).docx" className="btn"><FontAwesomeIcon icon={faDownload} /> Download </a>
</section>
<button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
    </main>
  );
}

export default Main;

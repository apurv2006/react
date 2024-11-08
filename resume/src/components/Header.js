import React from 'react';
function Header() {
  return (
    <header>
          <div class="header-content">
        <img src="/IMG_6007.JPG" alt="Apurva Jadhav" class="profile-pic" />
        <div class="text-content">
      <h1>Apurva Jadhav</h1>
      <p>Student | Aspiring Software Engineer</p>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links">
      <a href="https://www.hackerrank.com/profile/jadhavapurva623" target="_blank" rel="noopener noreferrer">
              <img src="./rank.jpeg"alt="HackerRank" className="social-logo" /> 
            </a>
            <a href="https://www.linkedin.com/in/apurva-j-777948284/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
                   alt="LinkedIn" className="social-logo" /> 
            </a>
          </div>
         <div class="divider"></div>
      </div>
      </div>
    </header>
  );
}

export default Header;

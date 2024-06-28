import * as React from 'react';
import Profile from "../images/Profile.png"
import LinkedIn from "../images/linkedin.png"
import Github from "../images/github.png"
import Email from "../images/email.png"
import Education from "../images/education.png"
import Experience from "../images/experience.png"
import Resume from "../images/2024ResumeNB.pdf"
import checkmark from "../images/checkmark.png"
import Arrow from "../images/arrow.png"
import stick from "../images/file.png"
import GPX from "../images/gpx.png"

import './mainpage.css';
import './media.css';
//import { useNavigate } from 'react-router-dom';


import Table from "./Table";

const MainPage = () => {

    const openPDF = () => {
      window.open('/path/to/your/file.pdf', '_blank');
    };

    function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }

  return (
    <>
    <nav id="desktop-nav">
      <div class="logo">Nic Baker</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    <nav id="hamburger-nav">
      <div class="logo">Nic Baker</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>

    <section id="profile">
      <div class="section__pic-container">
        <img src={Profile} alt="Nic Baker profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Nic Baker</h1>
        <p class="section__text__p2">Software Developer</p>
        <div class="btn-container">
          <a class="btn btn-color-2"  href={Resume}>Download CV</a>
          <a class="btn btn-color-2"  href="#contact">Contact Info</a>
        </div>
        <div id="socials-container">
          <a href='https://linkedin.com/'>
            <img
              src={LinkedIn}
              alt="My LinkedIn profile"
              class="icon"/>
          </a>
          <a href='https://github.com/nicbake'>
            <img
              src={Github}
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/nicbake'" />
          </a>
          
        </div>
      </div>
    </section>
      
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={stick}
            alt="Profile picture"
            class="about-pic" />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={Experience}
                alt="Experience icon"
                class="icon" />
              <h3>Experience</h3>
              <p>6+ years <br />Developer</p>
            </div>
            <div class="details-container">
              <img
                src={Education}
                alt="Education icon"
                class="icon" />
              <h3>Education</h3>
              <p>B.Comp Bachelors Degree<br />Computer Science</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            I am a recent graduate from the University of Guelph with a degree in Computer Science and, a minor in Psychology
            </p>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'" />
    </section>
      
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'" />
    </section>
      
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={GPX}
                alt="Project 1"
                class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">GPXParser</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={Arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'" />

    </section>
      
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={Email}
            alt="Email icon"
            class="icon contact-icon email-icon" />
          <p><a href="mailto:nicholas.baker180@gmail.com">nicholas.baker180@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={LinkedIn}
            alt="LinkedIn icon"
            class="icon contact-icon" />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>

    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Nic Baker. All Rights Reserved.</p>
    </footer>
    </>
  )
}

//function openPDF() {
  //window.open('../images/2024ResumeNB.pdf', '_blank');
//}

/*const MyButton = () => {
  useNavigate('/#contact');
};*/
export default MainPage
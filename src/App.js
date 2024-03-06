import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="profile-container">
        <img className="profile" src="/malek.jpg" alt="" />

          <h1 className="name">MALEK BEN YOUSSEF</h1>
          <h3 className="tagline">Full Stack Developer</h3>
        </div>

        <div className="contact-container container-block">
          <h2 className="container-block-title">Contact</h2>
          <ul className="list-unstyled contact-list">
            <li className="email"><i className="fa-solid fa-envelope"></i><a href="mailto: malkbenyoussef2002@gmail.com">malkbenyoussef2002@gmail.com</a></li>
            <li className="phone"><i className="fa-solid fa-phone"></i><a href="tel:+905348476158">+905348476158</a></li>
            <li className="linkedin"><i className="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/malek-ben-youssef-71a146218/" target="_blank" rel="noopener noreferrer">linkedin.com/in/malek ben youssef</a></li>
            <li className="github"><i className="fa-brands fa-github"></i><a href="https://github.com/malekbenyousef" target="_blank" rel="noopener noreferrer">github.com/malekbenyousef</a></li>
          </ul>
        </div>

        <div className="education-container container-block">
          <h2 className="container-block-title">Education</h2>
          <div className="item">
            <h4 className="degree">Second year in software engineering</h4>
            <h5 className="meta">Ostim Technical University</h5>
            <div className="time">2022 - 2026</div>
          </div>
        </div>

        <div className="languages-container container-block">
          <h2 className="container-block-title">Languages</h2>
          <ul className="list-unstyled interests-list">
            <li>English <span className="lang-desc">(Professional)</span></li>
            <li>French <span className="lang-desc">(Professional)</span></li>
            <li>Arabic<span className="lang-desc">(Native)</span></li>
          </ul>
        </div>

        <div className="interests-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            <li>Windsurfing</li>
            <li>Football</li>
            <li>Cooking</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="cv">
          <header>
            <h1>Malek Ben Youssef</h1>
            <p>Bachelor Student at Ostim Technical University, Turkey</p>
          </header>
          <section className="about">
            <h2>About Me</h2>
            <p>
              I am Malek Ben Youssef from Tunisia, currently studying in my second year at Ostim Technical University
              in Turkey. I am passionate about learning new languages and open to exploring various fields of
              knowledge.
            </p>
          </section>
          <section className="experience">
            <h2>Experience</h2>
            <p>
              I am currently doing an internship at BLC, a software company in Ankara, since the end of last year.
              Throughout my academic journey, I have consistently excelled in my studies, always ranking at the top
              of my class.
            </p>
          </section>
          <section className="achievements">
            <h2>Achievements</h2>
            <ul>
              <li>National Team of Tunisia Windsurfing - 4th Place in African Championship</li>
            </ul>
          </section>
          <section className="languages">
            <h2>Languages</h2>
            <ul>
              <li>Arabic (Native)</li>
              <li>English (Professional Proficiency)</li>
              <li>French (Professional Proficiency)</li>
              <li>Turkish (Decent Level)</li>
            </ul>
          </section>
          <section className="interests">
            <h2>Interests</h2>
            <p>I am interested in a wide range of topics and always eager to learn and explore new things.</p>
          </section>
          <footer>
            <p>Email: malek@example.com</p>
            <p>Phone: +90 123 456 789</p>
            <p>Website: www.malekbenyoussef.com</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;



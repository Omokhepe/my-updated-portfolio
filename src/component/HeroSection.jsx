import React, { useState } from "react";
import { down_arrow, profileImg } from "../assets/images/index.js";
import "./HeroSection.css";
import { projects, skillStack, workExperience } from "../constant/data.js";
import { Chatbot, ImageSlider, ContactForm } from "./index.js";
import "./Chatbot.css";
import WorkExperience from "./WorkExperience.jsx";
import useScrollAnimation from "../constant/useScrollAnimation.js";

const HeroSection = () => {
  useScrollAnimation(".section");
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="intro-part section">
        <div className="side-text">
          <h2 className="welcome textPresetXL textMargin">
            Nice to Meet You! <br /> I’m Omoh Imobu
          </h2>
          <h4 className="textPresetL">Software Developer</h4>
          <p className="intro-text textPreset1Med">
            A developer based in the Philippines. I enjoy building modern web
            applications that are fast, scalable, and user-friendly. Most of my
            work revolves around React, Next.js, and TypeScript, but I’m always
            exploring new tools and ways to make the web better. When I’m not
            coding, I’m usually learning something new, experimenting with
            design ideas, or improving projects I’ve already built.
          </p>
          <div className="btn-box textPreset1Med">
            <a href="#contact-me">Contact me</a>
            <a href="#" onClick={() => setShowChat((prevState) => !prevState)}>
              Let's Talk
            </a>
          </div>
        </div>
        <img src={profileImg} alt="Next.js logo" className="heroImage" />
        {/*<div className='home-sci'>*/}
        {/*    <a href="#"><box-icon type='logo' name="linkedin"/></a>*/}
        {/*    <a href="#"><box-icon type='logo' name="facebook"/></a>*/}
        {/*    /!*<a href="#"></a>*!/*/}
        {/*</div>*/}

        <span className="home-imgHover"></span>
      </section>

      <div className="stack-section section">
        <div className="carousel-wrapper">
          <div className="carousel">
            {[...skillStack, ...skillStack].map((skill, index) => (
              <div className="carousel-item" key={index}>
                <img src={skill.image} alt={skill.stack} />
                <p>{skill.stack}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="workExperience">
          {workExperience.map((job, i) => (
            <WorkExperience job={job} />
          ))}
        </div>
      </div>

      <section id="projects" className="project-part section">
        <div className="project-Section">
          <div className="project-subtitle">
            <h2 className="textPresetL">Project</h2>
            <a href="#contact-me" className="textPreset1Med">
              Contact Me
            </a>
          </div>
          <div className="projectList">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/*<section  className='contact-part'>*/}
      <div id="contact-me" className="contact-Section section">
        <div className="contact-subtitle">
          <h2 className="textPresetXL textMargin">Contact</h2>
          <p className="textPreset1Med">
            I’d love to hear about your project and how I could help bring it to
            life. Whether you’re looking for a developer to build something from
            scratch or improve an existing app, I’m open to working together.
            Drop your details in the form below, and I’ll get back to you
            quickly.
          </p>
        </div>
        <ContactForm />
      </div>
      {/*</section>*/}

      <Chatbot showChat={showChat} setShowChat={setShowChat} />
    </>
  );
};

export default HeroSection;

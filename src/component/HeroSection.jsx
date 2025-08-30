import React, {useState} from 'react';
import {down_arrow, profileImg} from '../assets/images/index.js';
import './HeroSection.css'
import {techStack} from "../constant/data.js";
import {Chatbot, ImageSlider, ContactForm} from "./index.js";
import 'boxicons'
import ChatbotIcon from "../constant/ChatbotIcon.jsx";
import './Chatbot.css';

const HeroSection = () => {
    const [showChat, setShowChat] = useState(false);

    return (
        <>
            <section className="intro-part">
                    <div className='side-text'>
                        <h2 className='welcome textPresetXL'>Hi, I’m Omoh Imobu</h2>
                        <h4 className='textPresetL'>Software Developer</h4>
                        <p className='intro-text textPreset1Med'>a developer based in the Philippines. I enjoy building modern web applications that are fast, scalable, and user-friendly. Most of my work revolves around React, Next.js, and TypeScript, but I’m always exploring new tools and ways to make the web better. When I’m not coding, I’m usually learning something new, experimenting with design ideas, or improving projects I’ve already built.</p>
                        <div className='btn-box textPreset1Med'>
                            <a href="#contact-me">contact me</a>
                            <a href="#" onClick={() => setShowChat(prevState => !prevState)}>Let's Talk</a>
                        </div>

                    </div>

                    {/*<Image src='/next.svg' alt='my image' />*/}
                    <img
                        // className="dark:invert"
                        src={profileImg}
                        alt="Next.js logo"
                        className='heroImage'
                        // width={180}
                        // height={38}
                        // priority
                    />
                    {/*<div className='home-sci'>*/}
                    {/*    <a href="#"><box-icon type='logo' name="linkedin"/></a>*/}
                    {/*    <a href="#"><box-icon type='logo' name="facebook"/></a>*/}
                    {/*    /!*<a href="#"></a>*!/*/}
                    {/*</div>*/}

                <span className='home-imgHover'></span>
            </section>

            <div className='stack-section'>
                {
                    techStack.map((item, index) => {
                        return (
                            <div key={index} className='stackList'>
                                <h3 className='textPresetL'>{item.stack}</h3>
                                <h6 className='textPreset1Med'>{item.years} Years Experience</h6>
                            </div>
                        )
                    })
                }
            </div>

            <section id='projects' className='project-part'>
                <div className='project-Section'>
                    <div className='project-subtitle'>
                        <h2 className='textPresetL'>Project</h2>
                        <a href="#contact-me" className='textPreset1Med'>Contact Me</a>
                    </div>
                    <div className='projectList'>
                        <ImageSlider/>
                    </div>
                </div>
            </section>

            {/*<section id='contact-me' className='contact-part'>*/}
                <div id='contact-me' className='contact-Section'>
                    <div className='contact-subtitle'>
                        <h2 className='textPresetL'>Contact</h2>
                        <p className='textPreset1Med'>
                            I’d love to hear about your project and how I could help bring it to life. Whether you’re looking for a developer to build something from scratch or improve an existing app, I’m open to working together. Drop your details in the form below, and I’ll get back to you quickly.
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
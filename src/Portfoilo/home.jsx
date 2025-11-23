import rajaIcon from '../assets/Raja N.jpeg';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import {Experience} from './Experience';
import {Projects} from './Projects';
import "./home.css"
import { useEffect } from 'react';
import { Skills } from './Skills';

export const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "black"
    });

    return (
        <>
        <section>
            <div className="home-container">
                <section id="home">
                    <Navbar />
                </section>
                <main>
                    <div className="main-parent">
                        <div className="main-parent-1">
                            <h1 style={{ marginTop: "60px" ,fontSize:"48px" }}>Raja Nalliyappan</h1>
                            <h3 style={{ marginTop: "50px" }}>
                                Manual Software Tester → <span style={{ color: "lightpink" }}>FullStack Developer</span>
                            </h3>
                            <p style={{fontSize:"18px"}}>
                                Full-Stack Developer with strong skills in HTML, CSS, JavaScript, React, C#, .NET Core, and SQL Server. Hands-on experience in UI development, API creation, and database integration. 3 years of Manual Testing experience ensures reliable, bug-free applications. Open to Full-Stack, Frontend, or Backend Developer roles.
                            </p>
                            <a style={{ marginTop: "50px" }} href="https://Raja-Nalliyappan.github.io/dev-portfolio/Resume/Raja.pdf" download="Raja_resume.pdf">
                                Download Resume
                            </a>
                        </div>
                        <div className="main-parent-img">
                            <img src={rajaIcon} alt="raja" />
                        </div>
                    </div>
                </main>
                </div>
            </section>

            <section id="experience">
                 <Experience />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

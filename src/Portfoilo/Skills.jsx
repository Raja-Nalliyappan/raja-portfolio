import html from "../assets/html-5.svg";
import css from "../assets/CSS-3.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react-js.svg";
import csharo from "../assets/Csharp.svg";
import { useEffect } from "react";
import "./Skills.css";

export const Skills = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  // Array of all skill icons (images or JSX for SVGs)
  const skills = [
    <img src={html} alt="HTML" key="html" />,
    <img src={css} alt="CSS" key="css" />,
    <img src={js} alt="JS" key="js" />,
    <img src={react} alt="React" className="react-logo" key="react" />,
    <img src={csharo} alt="CSharp" key="csharp" />,

    // Example SVGs
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="104"
      height="104"
      role="img"
      aria-label=".NET icon"
      className="tech-svg"
      key="dotnet"
    >
      <rect rx="10" width="64" height="64" fill="#512BD4" />
      <g transform="translate(8,16)" fill="#fff">
        <path d="M6 8c0-4 6-8 14-8s14 4 14 8-6 8-14 8S6 12 6 8z" opacity="0.18" />
        <text
          x="32"
          y="28"
          fontFamily="Segoe UI, Arial, sans-serif"
          fontWeight="700"
          fontSize="22"
          textAnchor="middle"
          fill="#fff"
        >
          .NET
        </text>
      </g>
    </svg>,

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="104"
      height="104"
      role="img"
      aria-label="ASP.NET Core icon"
      className="tech-svg"
      key="aspnet"
    >
      <rect width="64" height="64" rx="12" fill="#6BA3F0" />
      <g transform="translate(8,8)" fill="#fff">
        <rect x="4" y="12" width="40" height="24" rx="4" opacity="0.15" />
        <path d="M6 18h12v2H6zM6 22h12v2H6zM22 18h12v2H22z" />
        <text
          x="24"
          y="44"
          fontFamily="Segoe UI, Arial, sans-serif"
          fontWeight="700"
          fontSize="10"
          textAnchor="middle"
        >
          ASP.NET
        </text>
      </g>
    </svg>,

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="104"
      height="104"
      role="img"
      aria-label="EF Core icon"
      className="tech-svg"
      key="efcore"
    >
      <rect width="64" height="64" rx="12" fill="#2F9D27" />
      <g transform="translate(8,8)" fill="#fff">
        <ellipse cx="24" cy="18" rx="20" ry="8" opacity="0.14" />
        <rect x="4" y="18" width="40" height="18" rx="4" opacity="0.2" />
        <ellipse cx="24" cy="36" rx="20" ry="6" />
        <text
          x="24"
          y="46"
          fontFamily="Segoe UI, Arial, sans-serif"
          fontWeight="700"
          fontSize="8"
          textAnchor="middle"
        >
          EF Core
        </text>
      </g>
    </svg>,
  ];

  // Duplicate the array for seamless scroll
  const seamlessSkills = [...skills, ...skills];

  return (
    <div className="skills-page">
      <div className="skills-content">
        <h1 className="skills-title">Development Skills</h1>
        {/* <p className="typewriter">
          Full Stack .NET Developer skilled in ASP.NET Core, Web API, React.js, and SQL Server with strong OOPs and problem-solving skills.
        </p> */}
        <div className="skill-scroll-wrapper">
          <div className="skill-list">
            {seamlessSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

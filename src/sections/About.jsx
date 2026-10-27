import React from "react";
import "./About.css";
import AboutCard from "../components/AboutCard";

export default function About({ Heading, Description, Goal1, Goal2 }) {
  return (
    <section className="about">
      <h2>About Me</h2>

      <p className="about-intro">
        I’m a Computer Engineering student and MERN Stack Developer Intern with
        a strong foundation in frontend web development. I enjoy building
        interactive and user-friendly web applications using HTML, CSS,
        JavaScript, Bootstrap, and React. Currently, I’m expanding my skills in
        Node.js, Express.js, and MongoDB while working toward becoming a
        well-rounded full-stack web developer. I learn through practical
        projects and continuously improve my problem-solving and development
        skills.
      </p>

      <div className="about-container">
        <AboutCard
          Heading="🎓 Education"
          Description="Completed Diploma in Computer Engineering. Preparing for Bachelor of Engineering."
        />
        <AboutCard
          Heading="🎯 Career Goal"
          Goal1="Full-Stack Web Developer"
          Goal2="Continuous Learning"
        />
        <AboutCard
          Heading="💡 Beyond Coding"
          Description="I enjoy going to the gym and continuously improving myself through learning and practice."
        />
      </div>
    </section>
  );
}

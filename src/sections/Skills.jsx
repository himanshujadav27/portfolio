import React from "react";
import "./Skills.css";
import SkillCard from "../components/SkillCard";

export default function Skills({ Heading, Skill1, Skill2, Skill3, SKill4 }) {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <p className="skills-intro">
        Technologies and tools I use to build modern, responsive web
        applications.
      </p>

      <div className="skill-container">
        <SkillCard 
          Heading="Frontend"
          Skill1="HTML, CSS"
          Skill2="JavaScrit"
          Skill3="Bootstrap"
          Skill4="React.js"
        />
        <SkillCard
          Heading="MERN / Currently Learning"
          Skill1="Node.js"
          Skill2="Express.js"
          Skill3=""
          Skill4=""
        />
        <SkillCard
          Heading="Database"
          Skill1="MongoDB"
          Skill2=""
          Skill3=""
          Skill4=""
        />
        <SkillCard
          Heading="Also Knows.."
          Skill1="PHP, Laravel"
          Skill2="Python"
          Skill3="Java"
          Skill4="C, C++"
        />
      </div>
    </section>
  );
}

import React from "react";
import "./SkillCard.css";

export default function SkillCard(props) {
  return (
    <>
      <div className="skill-card">
        <ul>
          <h3>{props.Heading}</h3>

          {props.Skill1 && <li>{props.Skill1}</li>}
          {props.Skill2 && <li>{props.Skill2}</li>}
          {props.Skill3 && <li>{props.Skill3}</li>}
          {props.Skill4 && <li>{props.Skill4}</li>}
        </ul>
      </div>
    </>
  );
}

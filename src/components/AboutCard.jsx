import React from "react";

export default function AboutCard(props) {
  return (
    <>
      <div className="about-card">
        <h3>{props.Heading}</h3>

        {props.Description && <p>{props.Description}</p>}

        {props.Goal1 && (
          <ul>
            <li>{props.Goal1}</li>
            <li>{props.Goal2}</li>
          </ul>
        )}
      </div>
    </>
  );
}

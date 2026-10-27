
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-left">
          <p className="hero-intro">Hi, I'm</p>

          <h1>Himanshu Jadav</h1>

          <h2>Mern Stack Developer</h2>

          <p className="hero-description">
            I build responsive, user-friendly web applications using HTML,
            CSS, JavaScript and MERN while continuously learning modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">View Projects</Link>

            <Link id="contact_btn" to="/contact">
              Contact Me
            </Link>

            <a
              id="resume_btn"
              href="/images/HimanshuJadav_MERN_Developer_Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="code-card">
            <div className="code-header">
              <div className="window-buttons">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <span className="file-name">developer.js</span>
            </div>

            <pre>
              <code>
                <span className="code-line"><span className="keyword">const</span>{" "}<span className="variable">developer</span> = {"{"}</span>
                <span className="code-line">{"    "}<span className="property">name</span>: <span className="string">"Himanshu"</span>,</span>
                <span className="code-line">{"    "}<span className="property">role</span>: <span className="string">"MERN Stack Developer"</span>,</span>
                <span className="code-line">{"    "}<span className="property">skills</span>: [</span>
                <span className="code-line">{"        "}<span className="string-html">"M - MongoDB"</span>,</span>
                <span className="code-line">{"        "}<span className="string-js">"E - Express.js"</span>,</span>
                <span className="code-line">{"        "}<span className="string-js">"R - React.js"</span>,</span>
                <span className="code-line">{"        "}<span className="string-js">"N - Node.js"</span>,</span>
                <span className="code-line">{"        "}<span className="string-js">"Other.."</span></span>
                <span className="code-line">{"    "}],</span>
                <span className="code-line">{"    "}<span className="property">learning</span>: <span className="string">"Web Development"</span></span>
                <span className="code-line">{"};"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <button
        id="top_btn"
        className="top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </main>
  );
}

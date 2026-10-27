import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects({
  Heading,
  Image,
  Desc,
  Tech,
  GitName,
  DemoName,
}) {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <p className="project-intro">
        A collection of projects built while learning web technologies, and
        modern web development.
      </p>

      <div className="project-container">
        <ProjectCard
          Heading="Employee Manager App"
          Image="/images/EmployeeManager.png"
          Desc="A React-based Employee Manager application that allows users to add,
        update, delete, and manage employee records with a dynamic and
        user-friendly interface."
          Tech="HTML • CSS • JavaScript • React"
          GitName="employee-manager-app"
          DemoName="employee-manager-app"
        />
        <ProjectCard
          Heading="🎮 Simon Game"
          Image="/images/SimonGame.png"
          Desc="An interactive Simon Game built with HTML, CSS, JavaScript, and jQuery. Players repeat an 
          increasingly difficult sequence of colors and sounds while tracking their progress through different 
          levels."
          Tech="HTML • CSS • JavaScript • jQuery"
          GitName="simon-game"
          DemoName="simon-game"
        />
        <ProjectCard
          Heading="🎬 Movie Search App"
          Image="/images/MovieSearchApp_SS.png"
          Desc="Search movies instantly using the OMDb API.Displays movie posters, release year, 
          and handles missing images with a placeholder."
          Tech="HTML • CSS • JavaScript • OMDb API"
          GitName="movie-search-app"
          DemoName="movie-search-app"
        />
        <ProjectCard
          Heading="🌤 Weather App"
          Image="/images/WeatherApp_SS.png"
          Desc="Fetches real-time weather information using the Open-Meteo API. Displays temperature, 
          wind speed, wind direction, and weather details for any city."
          Tech="HTML • CSS • JavaScript • Open-Meteo API"
          GitName="weather-app"
          DemoName="weather-app"
        />
        <ProjectCard
          Heading="Social Media App"
          Image="/images/SocialMediaApp.png"
          Desc="A simple social media app built with HTML, CSS, and JavaScript. Users can create and display 
          posts with image support,practicing DOM manipulation, events, and dynamic UI updates."
          Tech="HTML • CSS • JavaScript"
          GitName="social-media-app"
          DemoName="social-media-app"
        />
      </div>
    </section>
  );
}

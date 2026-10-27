import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header>

        <nav id="navbar">

            <Link to="/">Home</Link>

            <Link to="/About">About</Link>

            <Link to="/Skills">Skills</Link>

            <Link to="/Projects">Projects</Link>

            <Link to="/Contact">Contact</Link>

        </nav>

    </header>
  )
}

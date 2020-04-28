import React from 'react'
import './style.css'

export default function NavBar() {
    return (
        <nav>
            <div className="logo">
                <h4>Caio Ragazzi</h4>
            </div>
            <ul className="nav-links">
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

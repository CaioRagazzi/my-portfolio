import React from 'react'
import './style.css'

export default function Home() {
    return (
        <section className="showcase">
            <div className="video-container">
                <video src="/Videos/video.mp4" autoPlay muted loop />
            </div>
            <div className="content">
                <h1>My Portfolio</h1>
                {/* <h3>full screen video landing page</h3>
                <a href="#about" class="btn">Read more</a> */}
            </div>
        </section>
    )
}

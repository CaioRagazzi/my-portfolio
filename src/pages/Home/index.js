import React, { useState, useEffect } from 'react'
import './style.css'

export default function Home() {

    const [positionY, setpositionY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setpositionY(window.scrollY)
        });
        return () => {
          window.removeEventListener('scroll', () => {
            setpositionY(window.scrollY)
          });
        }
      }, [])

      function getOpacity() {
          return 1 + positionY/-850
      }

    return (
        <section className="showcase">
            <div className="video-container">
                <video style={{ opacity: getOpacity() }} src="/Videos/video.mp4" autoPlay muted loop />
            </div>
            <div className="content">
                <h1>My Portfolio</h1>
                {/* <h3>full screen video landing page</h3>
                <a href="#about" class="btn">Read more</a> */}
            </div>
        </section>
    )
}

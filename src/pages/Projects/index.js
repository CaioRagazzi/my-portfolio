import React from 'react'
import styles from "./styles.module.css";

import CardProject from "../../components/CardProject";
import imageCarWash from '../../assets/carwash.png'
import imageEntertainment from '../../assets/entertainment.png'
import personalresumeEntertainment from '../../assets/personalresume.png'

export default function Projects() {
    return (
        <section id="projects" className={styles.content}>
            <CardProject className="col" image={imageCarWash} title="Car Wash Android App" description="Descrition" />
            <CardProject className="col" image={imageEntertainment} title="Movies and Series Web Application" description="Descrition" />
            <CardProject image={personalresumeEntertainment} title="Personal Resume" description="Descrition" />
        </section>
    )
}

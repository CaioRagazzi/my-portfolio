import React from 'react'
import styles from "./styles.module.css";

export default function CardProject(props) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.image} alt="imagem" />
            <div className={styles.content}>
                <h4><b>{props.title}</b></h4>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

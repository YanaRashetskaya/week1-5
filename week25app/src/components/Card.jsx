import React from 'react'
import styles from './style/Card.css';


export default function Card(props) {
    return (
        <div className={`${styles.cart} ${props.isSelected ? `${styles.selected}` : ""}`}>
            <header className={`${styles.header} ${props.theme.header}`}>{props.header}</header>
            <main className={`${styles.main} ${props.theme.main}`}>
                <div className={styles.price}>{props.main}</div>
                <div className={styles.speed}>{props.speed}</div>
            </main>
            <footer className={styles.footer}>{props.footer}</footer>
        </div >
    )
}

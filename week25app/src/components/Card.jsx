import React from 'react'
import styles from './Card.css';

export default function Card(props) {
    let hoverCard = "";
    if (props.isSelected) hoverCard = " selected";
    return (
        <div className={styles.cart + hoverCard}>
            <header className={styles.header}>{props.header}</header>
            <main className={styles.main}>
                <div className={styles.price}>{props.main}</div>
                <div className={styles.speed}>{props.speed}</div>
            </main>
            <footer className={styles.footer}>{props.footer}</footer>
        </div>
    )
}

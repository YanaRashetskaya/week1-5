import React from 'react'


export default function AppHeader() {
    return (
        <>
            <div className={styles.header}>
                <img src="./assets/icon/logo.png" alt='logo'></img>
                <img src="./assets/icon/icon-search.png" alt='icon'></img>
                <p className={styles.sin}>Войти</p>
                <p className={styles.log}>Зарегистрироваться</p>
            </div>

        </>
    )
}

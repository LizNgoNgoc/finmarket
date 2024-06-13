import styles from './header.module.css'

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.header_container}>
            <img src="" alt="logo" />
            <div className={styles.header_container_info}>
                <p></p>
                <p></p>
                <img src="" alt="login" />
            </div>
        </div>
        <div></div>
    </header>
}
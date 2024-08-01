import styles from './Modal.module.css'


export default function Modal ({open}) {
    return <section className={styles.overlay}>
        <div className={styles.modal}>
        <nav className={styles.nav}>
            <div className={styles.nav_content}>вход</div>
            <div className={styles.nav_content}>регистрация</div>
        </nav>
        <hr className={styles.line}/>
        </div>
    </section>
}
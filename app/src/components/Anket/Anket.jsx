import styles from './anket.module.css'

export default function Abket() {
    return <section className={styles.anket}>
        <div className={styles.anket_page}>
            <span className={styles.txt}>Главная / </span><span className={styles.txt_grey}>Анкета</span>
        </div>
        <div className={styles.number}>2</div>
        <div className={styles.container}>
            <h3 className={styles.header}>Анкета</h3>
            <div className={styles.rating}></div>
        </div>
        <div className={styles.organization}>
            <div className={styles.fisic}>Физическое лицо</div>
            <div className={styles.uri}>Юридическое лицо/ИП</div>
        </div>
        <nav className={styles.nav}>
            <div className={styles.nav_text}>Личные данные</div>
            <div className={styles.nav_text}>общая информация</div>
            <div className={styles.nav_text}>обязательства</div>
            <div className={styles.nav_text}>активы</div>
        </nav>
        <form action="">
            <h3 className={styles.header_function}>Контактное лицо </h3>
            <div className={styles.cont}>
                <div className={styles.container_form}></div>
                <div className={styles.container_form}></div>
            </div>
        </form>
    </section>
}
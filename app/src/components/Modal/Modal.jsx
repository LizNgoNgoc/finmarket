import styles from './Modal.module.css'


export default function Modal ({open}) {
    return <section className={styles.overlay}>
        <div className={styles.modal}>
        <nav className={styles.nav}>
            <div className={styles.nav_content}>вход</div>
            <div className={styles.nav_content}>регистрация</div>
        </nav>
        <hr className={styles.line}/>
        <div className={styles.container}>
            <div className={styles.step}>
                <div className={styles.number}>1</div>
                <div className={styles.text_container}>
                    <p className={styles.steptxt}>шаг</p>
                </div>
            </div>
            <div className={styles.srvice_container}>
                <div className={styles.get}>Получить услугу</div>
                <div className={styles.take}>Предоставить услугу</div>
            </div>
            <div className={styles.radio_container}>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Займы/Рефинансирование</label>
                </div>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Возврат долговых обязательств</label>
                </div>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Банкротство</label>
                </div>
            </div>
            <form action=""></form>
        </div>
        </div>
    </section>
}
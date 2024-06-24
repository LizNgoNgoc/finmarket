import styles from './services.module.css'

export default function Services() {
    return <section className={styles.services}>
        <h2 className={styles.header_services}>Наши услуги</h2>
        <div className={styles.services_container}>
            <div className={styles.service_content}>
                <h3 className={styles.header_srvcont}>ПОЛУЧЕНИЕ ЗАЙМА</h3>
                <img src="./images/services/own.png" className={styles.img_own} alt="img" />
                <button className={styles.btn_servcont}>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.service_content}>
                <h3 className={styles.header_srvcont}>РЕФИНАНСИРОВАНИЕ ЗАЙМА</h3>
                <img src="./images/services/ref_own.png" className={styles.img_ref} alt="img" />
                <button className={styles.btn_servcont}>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.service_content}>
                <h3 className={styles.header_srvcont}>БАНКРОТСТВО</h3>
                <img src="./images/services/crash.png" className={styles.img_crash} alt="img" />
                <button className={styles.btn_servcont}>ПОДРОБНЕЕ</button>
            </div>
            <div className={styles.service_content}>
                <h3 className={styles.header_srvcont}>ВОЗВРАТ ДОЛГОВ</h3>
                <img src="./images/services/debt.png" className={styles.img_debt} alt="img" />
                <button className={styles.btn_servcont}>ПОДРОБНЕЕ</button>
            </div>
        </div>
            
    </section>
}
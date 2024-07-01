import styles from './trade.module.css'

export default function Completed() {
    return <section className={styles.completed}>
        <div className={styles.container_info}>
            <div className={styles.less_container}>
                <h3 className={styles.header_first}>Частный кредитор</h3>
                <p className={styles.paragraph_container}>ставок нет </p>
            </div>
            <div className={styles.bigger_container}>
                <h3 className={styles.header_second}>Кредитный брокер</h3>
                <p className={styles.paragraph_container}>последняя ставка</p>
                <p className={styles.percent}>25.0%</p>
                <p className={styles.win}>Победитель: ООО "КРЕДИТМАРКЕТ+"</p>
            </div>
            <div className={styles.less_sec_container}>
                <h3 className={styles.header_third}>Ломбард</h3>
                <p className={styles.paragraph_container}>ставка</p>
                <p className={styles.percent}>25.5%</p>
            </div>
        </div>
        <button className={styles.watch_btn}>ПОСМОТРЕТЬ</button>
    </section>
}
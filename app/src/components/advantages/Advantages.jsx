import styles from './advantages.module.css'

export default function Advantages() {
    return <section className={styles.advantages}>
        <h2 className={styles.header_advantages}>Наши преимущества</h2>
        <div className={styles.advantages_content}>
            <div className={styles.advantages_container}>
                <div className={styles.adv_container}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.adv_container}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.adv_container}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <video src=""></video>
            </div>
        </div>
    </section>
}
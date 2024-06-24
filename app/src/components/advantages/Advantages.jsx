import styles from './advantages.module.css'

export default function Advantages() {
    return <section className={styles.advantages}>
        <h2 className={styles.header_advantages}>Наши преимущества</h2>
        <div className={styles.advantages_content}>
            <div className={styles.advantages_container}>
                <div className={styles.adv_container}>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>На бирже вы сможете получить лучшие условия  по финансовым услугам </p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>За вашу анкету будут конкурировать более 100 поставщиков услуг</p>
                    </div>
                </div>
                <div className={styles.adv_container}>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>Индивидуальные условия - торги вы сами настариваете, по вашему усмотрению</p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>Создайте предложение и на ваш лот откликнуться на торгах или как на готовое предложение</p>
                    </div>
                </div>
                <div className={styles.adv_container}>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>Юридическая поддержка системы</p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="" alt="" />
                        <p>Конкуренция дает вам лучшее предложение</p>
                    </div>
                </div>
            </div>
            <div>
                <video src=""></video>
            </div>
        </div>
    </section>
}
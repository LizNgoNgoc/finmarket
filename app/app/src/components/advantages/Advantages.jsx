import styles from './advantages.module.css'

export default function Advantages() {
    return <section className={styles.advantages}>
        <h2 className={styles.header_advantages}>Наши преимущества</h2>
        <div className={styles.advantages_content}>
            <div className={styles.advantages_container}>
            
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/1.png" alt="img" />
                        <p className={styles.text_adv}>На бирже вы сможете получить лучшие условия  по финансовым услугам </p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/2.png" alt="img" />
                        <p className={styles.text_adv}>За вашу анкету будут конкурировать более 100 поставщиков услуг</p>
                    </div>
             
          
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/3.png" alt="img" />
                        <p className={styles.text_adv}>Индивидуальные условия - торги вы сами настариваете, по вашему усмотрению</p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/4.png" alt="img" />
                        <p className={styles.text_adv}>Создайте предложение и на ваш лот откликнуться на торгах или как на готовое предложение</p>
                    </div>
           
            
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/5.png" alt="img" />
                        <p className={styles.text_adv}>Юридическая поддержка системы</p>
                    </div>
                    <div className={styles.advantages_category}>
                        <img src="./images/advantages/6.png" alt="img" />
                        <p className={styles.text_adv}>Конкуренция дает вам лучшее предложение</p>
                    </div>
            
            </div>
            <div>
                <video src=""></video>
            </div>
        </div>
    </section>
}
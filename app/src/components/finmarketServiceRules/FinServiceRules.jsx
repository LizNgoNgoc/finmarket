import styles from './finServiceRules.module.css'

export default function FinServiceRules() {
    return <section className={styles.service_container}>
        <div className={styles.service_info}>
            <h3 className={styles.service_header}>Как получить услугу на FinMarket.pro</h3>
            <p className={styles.service_text}>FinMarket.pro — это первый сайт, на котором вы сможете получить как физ. или юр. лицо финансовую услугу на самых выгодных условиях только от проверенных организаций на Торгах по «Голландской системе» или создав готовое предложение на которое могут откликнуться для предоставления займа.</p>
            <b className={styles.service_btn}>ПОДРОБНЕЕ</b>
        </div>
        <div className={styles.rules_container}>
            <div className={styles.rules_part}>
                <div >
                    <div className={styles.step_container}>
                        <div className={styles.num_container}>1</div>
                        <p className={styles.num_step}>шаг</p>
                    </div>
                    <div className={`${styles.text_container} ${styles.first_container}`}>
                        <h3 className={styles.header_text}>Регистрация</h3>
                        <p className={styles.paragraph_text}>Выберите роль: - получатель услуги - поставщик услугил</p>
                    </div>
                </div>
                <div>
                    <div className={styles.step_container}>
                        <div className={styles.num_container}>2</div>
                        <p className={styles.num_step}>шаг</p>
                    </div>
                    <div className={styles.text_container}>
                        <h3 className={styles.header_text}>Заполните анкету</h3>
                        <p className={styles.paragraph_text}>Больше звездочек при заполнении - лучше результат</p>
                    </div>
                </div>
            </div>
            <div className={styles.rules_part}>
                <div >
                    <div className={styles.step_container}>
                        <div className={styles.num_container}>3</div>
                        <p className={styles.num_step}>шаг</p>
                    </div>
                    <div className={styles.text_container}>
                        <h3 className={styles.header_text}>Отправьте лот на торги и участвуйто в аукционе</h3>
                        <p className={styles.paragraph_text}>или</p>
                        <h3 className={styles.header_text}>Создайте готовое предложение и получайте отклики</h3>
                    </div>
                </div>
                <div>
                    <div className={styles.step_container}>
                        <div className={styles.num_container}>4</div>
                        <p className={styles.num_step}>шаг</p>
                    </div>
                    <div className={styles.text_container}>
                        <h3 className={styles.header_text}>Получайте результат и организуйте встречу</h3>
                        <p className={styles.paragraph_text}>Конечный результат на FinMarket.pro это обмен контактными данными. Ждите звонка от победителя торгов и организуйте встречу</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
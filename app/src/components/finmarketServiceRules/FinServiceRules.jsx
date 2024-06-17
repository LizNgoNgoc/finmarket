import styles from './finServiceRules.module.css'

export default function FinServiceRules() {
    return <section className={styles.service_container}>
        <hr className={styles.service_line}/>
        <div></div>
        <div className={styles.service_info}>
            <h3 className={styles.service_header}>Как получить услугу на FinMarket.pro</h3>
            <p className={styles.service_text}>FinMarket.pro — это первый сайт, на котором вы сможете получить как физ. или юр. лицо финансовую услугу на самых выгодных условиях только от проверенных организаций на Торгах по «Голландской системе» или создав готовое предложение на которое могут откликнуться для предоставления займа.</p>
            <b className={styles.service_btn}>ПОДРОБНЕЕ</b>
        </div>
        <div className={styles.rules_container}>
            <div className={styles.rules_part}>
                <div>
                    <div>1</div>
                    <div>
                        <h3>Регистрация</h3>
                        <p>Выберите роль: - получатель услуги - поставщик услугил</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className={styles.rules_part}>
                <div></div>
                <div></div>
            </div>
        </div>
        <hr className={styles.service_line} />
    </section>
}
import styles from './buncrutcyinfo.module.css'

export default function BuncrutcyInfo() {
    return <section className={styles.bunc}>
        <div className={styles.links}>
            <span className={styles.span_header}>Главная / Услуги / </span><span className={styles.span_page}>Банкротство</span>
        </div>
        <div className={styles.info_container}>
            <div className={styles.bunc_info}>
                <h3 className={styles.bunc_header}>Банкротство</h3>
            <div className={styles.text_container}>
                <p className={styles.bunc_text}>Банкротство — это неспособность заемщика в полном объеме погасить задолженность, 
                    которая подтверждена арбитражным судом.</p>
                <p className={styles.bunc_text}>Банкротство является единственным законным средством не платить по долгам, так 
                    как после признания лица банкротом требования кредиторов считаются выполненными.</p>
                <p className={styles.bunc_text}>Банкротами могут быть признаны как физические, так и юридические лица.</p>
             </div> 
                <button className={styles.bunc_btn}>получить услугу</button>
            </div>
            <div className={styles.img_container}>
                <img src="./images/bunc/bunc_main.png" className={styles.img_bunc} alt="img" />
            </div>
        </div>
        <div className={styles.rules_info}>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Общие признаки банкротства:</h3>
                <li className={styles.text_rules}>Задолженность перед кредитором, просроченная более чем на 3 месяца.</li>
                <li className={styles.text_rules}>Сумма долга должна составлять от 300 000 рублей, иначе заявление о 
                    банкротстве не будет принято в суде.</li>
                <li className={styles.text_rules}>Признание факта банкротства арбитражным судом.</li>
            </div>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Основные этапы оформления банкротства:</h3>
                <li className={styles.text_rules}>Сбор необходимых документов, полный список которых указан в ФЗ №127 "О несостоятельности (банкротстве)".</li>
                <li className={styles.text_rules}>Оплата государственной пошлины за рассмотрение дела о банкротстве.</li>
                <li className={styles.text_rules}>Составление заявления в суд и его оформление.</li>
                <li className={styles.text_rules}>Подача полного пакета документов в суд.</li>
                <li className={styles.text_rules}>Решение суда.</li>
            </div>
        </div>
    </section>
}
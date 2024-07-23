import styles from './refinance.module.css'

export default function RefinanceInfo() {
    return <section className={styles.refinance_info}>
            <div className={styles.links}>
            <span className={styles.span_header}>Главная / Услуги / </span><span className={styles.span_page}>Рефинансирование займа</span>
            </div>
        <div className={styles.info_container}>
            <div className={styles.ref_info}>
                <h3 className={styles.ref_header}>Рефинансирование займа</h3>
            <div className={styles.text_container}>
                <p className={styles.ref_text}>Рефинансирование кредита / займа или перекредитование (целевой займ) – это получение нового 
                    займа с целью погашения старых кредитов на более выгодных условиях. Рефинансировать можно как часть задолженности, так и 
                    несколько кредитов.</p>
                <p className={styles.ref_text}>Перекредитованию подлежат такие виды обязательств как: ипотека, потребительский кредит, автокредит 
                    или частный займ.</p>
                <p className={styles.ref_text}>Однако стоит отметить, что рефинансирование не всегда бывает выгодным.</p>
             </div> 
                <button className={styles.ref_btn}>получить услугу</button>
            </div>
            <div className={styles.img_container}>
                <img src="./images/refinance/refinance_main.png" alt="img" />
            </div>
        </div>
        <div className={styles.rules_info}>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Основные причины для рефинансирования:</h3>
                <li className={styles.text_rules}>Уменьшение процентной ставки;</li>
                <li className={styles.text_rules}>Продление сроков кредита;</li>
                <li className={styles.text_rules}>Объединение нескольких кредитов для удобства оплаты;</li>
                <li className={styles.text_rules}>Изменение валюты платежей;</li>
                <li className={styles.text_rules}>Снятие залога с имущества.</li>
            </div>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Общие требования к заемщику для рефинансирования:</h3>
                <li className={styles.text_rules}>Возраст от 21 до 65 лет;</li>
                <li className={styles.text_rules}>Текущий стаж работы от полугода;</li>
                <li className={styles.text_rules}>Постоянный источник дохода.</li>
                <p className={styles.paragraph}>Список предоставляемых документов каждая кредитная организация или частное лицо устанавливает 
                    индивидуально, но обычно в него входят: паспорт, справка о доходах, документы по рефинансируемому кредиту.</p>
            </div>
        </div>
    </section>
}
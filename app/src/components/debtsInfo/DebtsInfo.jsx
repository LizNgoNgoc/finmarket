import styles from './debtsinfo.module.css'

export default function DebtsInfo() {
    return  <section className={styles.debts}>
    <div className={styles.links}>
        <span className={styles.span_header}>Главная / Услуги / </span><span className={styles.span_page}>Банкротство</span>
    </div>
    <div className={styles.info_container}>
        <div className={styles.bunc_info}>
            <h3 className={styles.bunc_header}>Возврат долгов</h3>
        <div className={styles.text_container}>
            <p className={styles.bunc_text}>Долговые обязательства — это документ, оформленный в свободной форме, в котором прописывается размер взятого долга, а также сроки и условия его погашения. Согласно данному документу, при невозврате задолженности 
                в установленные сроки, кредитор вправе требовать ее погашения как в судебном, так и внесудебном порядке.</p>
            <p className={styles.bunc_text}>В тех случаях, когда заемщик отказывается возвращать взятую у вас сумму, очень важно быть предельно аккуратным в самостоятельных попытках вернуть долг. Ведь в противном случае ваши слова и действия могут быть признаны угрозами и повлечь за собой административную или уголовную ответственность. 
                Поэтому целесообразно обратиться к специалистам по взысканию долговых обязательств.</p>
         </div> 
            <button className={styles.bunc_btn}>получить услугу</button>
        </div>
        <div className={styles.img_container}>
            <img src="./images/debts/debts_main.png" alt="img" />
        </div>
    </div>
    <div className={styles.rules_info}>
        <div className={styles.rules_cont}>
            <h3 className={styles.header_rules}>Виды долговых обязательств:</h3>
            <li className={styles.text_rules}>Долговая расписка;</li>
            <li className={styles.text_rules}>Договор на получение кредита / займа с залогом и без такового;</li>
            <li className={styles.text_rules}>Договор купли-продажи;</li>
            <li className={styles.text_rules}>Договорные обязательства</li>
        </div>
        <div className={styles.rules_cont}>
            <h3 className={styles.header_rules}>Помощь специалистов узкого профиля будет полезна в следующих случаях:</h3>
            <li className={styles.text_rules}>Вы готовы стать кредитором и хотите заранее себя обезопасить, составив грамотный договор займа.</li>
            <li className={styles.text_rules}>Заемщик отрицает долг при отсутствии расписки и свидетелей.</li>
            <li className={styles.text_rules}>Заемщик умер, тяжело заболел или же признан недееспособным.</li>
        </div>
    </div>
</section>
}
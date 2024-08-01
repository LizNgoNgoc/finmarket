import styles from './payattention.module.css'

export default function PayAttentionDebts() {
    return <section className={styles.attention}>
        <h3 className={styles.header_attention}>На что стоит обратить внимание:</h3>
        <div className={styles.container_info}>
            <img src="./images/borrow/attention.png" className={styles.img_attention} alt="img" />
            <div className={styles.text_container}>
                <li className={styles.text_attention}>Это должен быть специалист узкого профиля с опытом успешного взыскания долговых обязательств.</li>
                <li className={styles.text_attention}>Коллекторские агентства / Юридические организации / Юристы / Адвокаты по взысканию долговых обязательств 
                    ни в коем случае не должны использовать противозаконные методы работы (угрозы, шантаж, порчу имущества должника).</li>
                <li className={styles.text_attention}>В договоре об оказании юридических услуг должны быть четко прописаны: стоимость, порядок, условия и сроки предоставления услуг, а также гарантийные обязательства.</li>
                <div className={styles.text_special}>
                    <p className={styles.bold}>Не забывайте!</p>
                    <p className={styles.text_attention}>Юридическая помощь при получении услуг — это защита Вас как клиента UFEx.pro</p>
                </div>
            </div>
        </div>
    </section>
}
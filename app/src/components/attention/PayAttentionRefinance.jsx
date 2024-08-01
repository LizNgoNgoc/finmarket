import styles from './payattention.module.css'

export default function PayAttentionRefinance() {
    return <section className={styles.attention}>
    <h3 className={styles.header_attention}>На что стоит обратить внимание:</h3>
    <div className={styles.container_info}>
        <img src="./images/borrow/attention.png" className={styles.img_attention} alt="img" />
        <div className={styles.text_container}>
            <li className={styles.text_attention}>Проценты за досрочное погашение по уже оформленному кредиту должны пересчитываться, 
                иначе будет невыгодно оплачивать их по двум кредитам.</li>
            <li className={styles.text_attention}>Кредит должен быть долгосрочный и на большие суммы. В таком случае при снижении 
                ставки даже на 2-3% будет ощутимая выгода.</li>
            <li className={styles.text_attention}>Следует сопоставить расходы при рефинансировании и экономию, которую он может принести.</li>
            <div className={styles.text_special}>
                <p className={styles.text_attention}>У нас на сайте собраны надежные кредиторы, которые готовы предложить вам денежные средства на самых выгодных условиях.
                    Как показала мировая практика, такой способ получения займов является наиболее удобным и выгодным, так как вы не тратите время на самостоятельный поиск заемщика. Мы делаем это за вас.</p>
            </div>
        </div>
    </div>
    <p className={styles.bold}>Не забывайте!</p>
    <p className={styles.text_attention}>Юридическая помощь при получении услуг — это защита Вас как клиента UFEx.pro</p>
</section>
}
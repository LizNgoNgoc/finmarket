import styles from './payattention.module.css'

export default function PayAttentionBorrow() {
    return <section className={styles.attention}>
    <h3 className={styles.header_attention}>На что стоит обратить внимание:</h3>
    <div className={styles.container_info}>
        <img src="./images/borrow/attention.png" className={styles.img_attention} alt="img" />
        <div className={styles.text_container}>
            <li className={styles.text_attention}>Это должны быть Арбитражный управляющий / Юристы / Адвокаты узкого профиля (только дела о банкротстве) 
                с опытом завершенных дел о банкротстве.</li>
            <li className={styles.text_attention}>В договоре об оказании юридических услуг должны быть четко прописаны: стоимость, 
                порядок, условия и сроки предоставления услуг, а также гарантийные обязательства.</li>
            <div className={styles.text_special}>
                <p className={styles.text_attention}>Стоит отметить, что процедура банкротства имеет ряд тонких юридических нюансов. К примеру, при невозможности выплатить ипотеку, процесс признания 
                лица банкротом может послужить причиной потери недвижимости. Для того, чтобы учесть все риски и избежать неприятных последствий, 
                грамотнее всего воспользоваться услугами юристов, обладающих специальными знаниями в данной области.</p>
            </div>
        </div>
    </div>
    <p className={styles.bold}>Не забывайте!</p>
    <p className={styles.text_attention}>Юридическая помощь при получении услуг — это защита Вас как клиента UFEx.pro</p>
</section>
}
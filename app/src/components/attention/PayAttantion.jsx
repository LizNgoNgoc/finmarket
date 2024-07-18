import styles from './payattention.module.css'

export default function PayAttention() {
    return <section className={styles.attention}>
        <h3 className={styles.header_attention}>На что стоит обратить внимание:</h3>
        <div className={styles.container_info}>
            <img src="./images/borrow/attention.png" className={styles.img_attention} alt="img" />
            <div className={styles.text_container}>
                <li className={styles.text_attention}>Перед подписанием договора обязательно полностью его прочитайте и если что-то 
                    непонятно, то уточните информацию у заимодавца или возьмите с собой квалифицированного Юриста/Адвоката которого 
                    вы сможете найти на UFEx.pro;</li>
                <li className={styles.text_attention}>Не оставляйте в залог паспорт или какие-либо документы;</li>
                <li className={styles.text_attention}>У вас есть время на изучение договора займа;</li>
                <li className={styles.text_attention}>Взвесьте ваши силы и подумайте брать ли вам займ;</li>
                <li className={styles.text_attention}>Старайтесь соблюдать все условия, прописанные в договоре и возвращать займ в установленные сроки.</li>
            </div>
        </div>
        <div className={styles.text_special}>
            <p className={styles.text_attention}>У нас на сайте собраны надежные кредиторы, которые готовы предложить вам денежные средства на самых выгодных 
            условиях. Как показаламировая практика, такой способ получения займов является наиболееудобным и выгодным, так как
            вы не тратите время на самостоятельный поиск заемщика. Мы делаем это за вас.</p>
        </div>
        <p className={styles.bold}>Не забывайте!</p>
        <p className={styles.text_attention}>Юридическая помощь при получении услуг — это защита Вас как клиента UFEx.pro</p>
    </section>
}
import styles from './payattention.module.css'

export default function PayAttention() {
    return <section className={styles.attention}>
        <h3 className={styles.header_attention}>На что стоит обратить внимание:</h3>
        <div className={styles.container_info}>
            <img src="./images/borrow/attention.png" className={styles.img_attention} alt="img" />
            <div className={styles.text_container}>
                <p className={styles.text_attention}>Перед подписанием договора обязательно полностью его прочитайте и если что-то 
                    непонятно, то уточните информацию у заимодавца или возьмите с собой квалифицированного Юриста/Адвоката которого 
                    вы сможете найти на UFEx.pro;</p>
                <p className={styles.text_attention}>Не оставляйте в залог паспорт или какие-либо документы;</p>
                <p className={styles.text_attention}>У вас есть время на изучение договора займа;</p>
                <p className={styles.text_attention}>Взвесьте ваши силы и подумайте брать ли вам займ;</p>
                <p className={styles.text_attention}>Старайтесь соблюдать все условия, прописанные в договоре и возвращать займ в установленные сроки.</p>
            </div>
        </div>
        <p className={styles.text_attention}>У нас на сайте собраны надежные кредиторы, которые готовы предложить вам денежные средства на самых выгодных 
            условиях. Как показаламировая практика, такой способ получения займов является наиболееудобным и выгодным, так как
            вы не тратите время на самостоятельный поиск заемщика. Мы делаем это за вас.</p>
        <p className={styles.text_attention}>Не забывайте!</p>
        <p className={styles.text_attention}>Юридическая помощь при получении услуг — это защита Вас как клиента UFEx.pro</p>
    </section>
}
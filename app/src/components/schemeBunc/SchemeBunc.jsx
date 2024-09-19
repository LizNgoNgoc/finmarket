import styles from './schemebunc.module.css'

export default function SchemeBunc() {
    return <section className={styles.scheme}>
    <div className={styles.scheme_container}>
        <div className={styles.scheme_content}>
            <div className={styles.container_info}>
                <h3 className={styles.scheme_header}>Схема получения наших услуг  </h3>
                <p className={styles.scheme_text}>UFEx.pro — это сайт, на котором вы найдете Арбитражного управляющего / 
                    Юридическую организацию / Юристов / Адвокатов, готовых оказать вам услуги по банкротству на самых выгодных условиях.</p>
            </div>
        </div>
        <div className={styles.container_boxes}>
            <div className={styles.ordinary_box}>
                    <h3 className={styles.header_box}>1 шаг</h3>
                    <h3 className={styles.header_box}>Регистрация на сайте</h3>
                    <p className={styles.text_box}>Создайте личный кабинет, указав электронную почту и номер телефона</p>
            </div>
            <div className={styles.ordinary_box}>
                    <h3 className={styles.header_box}>2 шаг</h3>
                    <h3 className={styles.header_box}>Заполние анкеты</h3>
                    <p className={styles.text_box}>Внесите необходимые данные в анкету, создайте Лот и отправьте её на 
                        Торги или создайте готовое предложение организациям, предоставляющим услуги по банкротству: 
                        Арбитражному управляющему / Юридическую организацию / Юристу / Адвокату</p>
            </div>
            <div className={styles.ordinary_box}>
                    <h3 className={styles.header_box}>3 шаг</h3>
                    <h3 className={styles.header_box}>Выбор организации и обмен информацией</h3>
                    <p className={styles.text_box}>Выберете наиболее выгодное предложение и обменяйтесь данными 
                        с выбранной организацией, как при «Торгах», так и при создании/выборе готовых предложений</p>
            </div>
        </div>
            <div className={styles.pagination}>
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
            </div>
    </div>
</section>
}
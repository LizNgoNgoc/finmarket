import styles from './borrowinfo.module.css'

export default function BorrowInfo() {
    return <section className={styles.borrow}>
        <div className={styles.links}>
            <span className={styles.span_header}>Главная / Услуги / </span><span className={styles.span_page}>Получение займа</span>
        </div>
        <div className={styles.info_container}>
            <div className={styles.borrow_info}>
                <h3 className={styles.borrow_header}>Получение займа</h3>
            <div className={styles.text_container}>
                <p className={styles.borrow_text}>Займ — это форма договора, по которому одна сторона (заимодавец) предоставляет 
                    в долг денежные средства другой стороне (заемщику). Согласно договору займа денежные средства могут выдаваться 
                    как под процентную ставку, так и под залог движимого или недвижимого имущества.</p>
                <p className={styles.borrow_text}>В договоре займа прописываются все условия и сроки, 
                    при невыполнении которых заемщик имеет право взыскать задолженность через суд или же конфисковать залог.</p>
             </div> 
                <button className={styles.borrow_btn}>получить услугу</button>
            </div>
            <div className={styles.img_container}>
                <img src="./images/borrow/borrow_main.png" alt="img" />
            </div>
        </div>
        <div className={styles.rules_info}>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Общие требования к заемщику:</h3>
                <li className={styles.text_rules}>Наличие паспорта.</li>
                <li className={styles.text_rules}>Возраст не менее 18 лет.</li>
                <li className={styles.text_rules}>В некоторых случаях кредитор имеет право расширить список документов, предоставляемых заемщиком.</li>
            </div>
            <div className={styles.rules_cont}>
                <h3 className={styles.header_rules}>Порядок получения займа:</h3>
                <li className={styles.text_rules}>Предоставление кредитору от заёмщика данных или иной необходимой информации.</li>
                <li className={styles.text_rules}>Заключение договора между сторонами.</li>
                <li className={styles.text_rules}>Получение денег.</li>
            </div>
        </div>
    </section>
}
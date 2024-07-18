import styles from './borrowform.module.css'

export default function BorrowForm() {
    return <section className={styles.borrow_form}>
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.nav_text}>ЗАЙМ</div>
                <div className={styles.nav_text}>РЕФИНАНСИРОВАНИЕ</div>
                <div className={styles.nav_text}>БАНКРОТСТВО</div>
                <div className={styles.nav_text}>ВОЗВРАТ ДОЛГОВ</div>
            </nav>
            <form action="" className={styles.form}>
                <select type="text" className={styles.input}>
                    <option value="">Получить кредит</option>
                </select>
                
                <input type="phone" className={styles.input}/>
                <input type="email" className={styles.input}/>
                <input type="password" className={styles.input}/>
                <input type="password" className={styles.input}/>
                
            </form>
            <div className={styles.confident_container}>
                    <input type="checkbox" />
                    <p className={styles.text_confident}>Нажимая на кнопку Далее, Вы соглашаетесь на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
                    <button className={styles.btn_confident}>Далее</button>
            </div>
        </div>
    </section>
}
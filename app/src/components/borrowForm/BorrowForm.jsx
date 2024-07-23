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
                <div className={styles.cont_info}>
                    <label htmlFor="select" className={styles.label}>Получить услугу</label>
                    <select type="text" id='select' className={styles.input}>
                        <option value="">Получить кредит</option>
                    </select>
                </div>
                <div className={styles.cont_info}>
                    <label htmlFor="phone" className={styles.label}>Телефон</label>
                    <input type="phone" id='phone' className={styles.input}/>
                </div>
                <div className={styles.cont_info}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id='email' className={styles.input}/>
                </div>
                <div className={styles.cont_info}>
                    <label htmlFor="password1" className={styles.label}>Пароль</label>
                    <input type="password" id='password1' className={styles.input}/>
                </div>
                <div className={styles.cont_info}>
                    <label htmlFor="password2" className={styles.label}>Повторите пароль</label>
                    <input type="password" id='password2' className={styles.input}/>
                </div>
            </form>
            <div className={styles.confident_container}>
                    <input type="checkbox" />
                    <p className={styles.text_confident}>Нажимая на кнопку Далее, Вы соглашаетесь на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
            </div>
            <button className={styles.btn_confident}>Далее</button>
        </div>
    </section>
}
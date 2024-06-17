import styles from './formFin.module.css'
import { Link } from 'react-router-dom'

export default function FormFin() {
    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <Link className={styles.link_nav}>ЗАЙМ</Link>
            <Link className={styles.link_nav}>РЕФИНАНСИРОВАНИЕ</Link>
            <Link className={styles.link_nav}>БАНКРОТСТВО</Link>
            <Link className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</Link>
        </nav>
        <hr className={styles.form_line}/>
        <form action="" className={styles.form}>
            <input type="text" placeholder='Получить займ' className={styles.form_inp}/>
            <input type="phone" placeholder='Телефон' className={styles.form_inp}/>
            <input type="email" placeholder='Email' className={styles.form_inp}/>
            <input type="password" placeholder='Пароль' className={styles.form_inp}/>
            <input type="password" placeholder='Повторите пароль' className={styles.form_inp}/>
        <div className={styles.form_confident}>
            <input type="checkbox" />
            <p className={styles.text_confident}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
        </div>
        <button className={styles.form_btn}>УЧАСТВОВАТЬ</button>
        </form>
        
    </div>
}
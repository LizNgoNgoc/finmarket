import {  useState } from 'react'
import styles from './formFin.module.css'
import { Link } from 'react-router-dom'
import {useValidationForm, validationFin} from '../../common/validationForm'
import { useDispatch } from 'react-redux'
import { setForm } from '../../redux/RegFormSlice'


export default function FormFin() {
    const diapatch = useDispatch()
    const [check, setCheck] = useState(false)
    const [formElements, handleChange, formErrors, btnDisabled] = useValidationForm({select:'',phone:'',email:'',password: '',}, validationFin)

    function handleSubmit(e) {
        e.preventDefault()
        diapatch(setForm(formElements))
    }
    
    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <Link to='/borrow' className={styles.link_nav}>ЗАЙМ</Link>
            <Link to='/refinance' className={styles.link_nav}>РЕФИНАНСИРОВАНИЕ</Link>
            <Link to='/buncrutcy' className={styles.link_nav}>БАНКРОТСТВО</Link>
            <Link to='/debts' className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</Link>
        </nav>
        <hr className={styles.form_line}/>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <select onChange={handleChange} name='select' className={styles.form_inp}>
                <option value="" className={styles.option}></option>
                <option value="Получить займ" className={styles.option}>Получить займ</option>
                <option value="Рефинансирование займа" className={styles.option}>Рефинансирование займа</option>
                <option value="Банкротство" className={styles.option}>Банкротство</option>
                <option value="Возврат долгов" className={styles.option}>Возврат долгов</option>
            </select>
            <p className={`${styles.error}`}>{formErrors.select.validity ? '' : formErrors.select.message}</p>
            <input type="phone" name="phone" placeholder='Телефон' onInput={handleChange} className={styles.form_inp}/>
            <p className={`${styles.error}`}>{formErrors.phone.validity ? '' : formErrors.phone.message}</p>
            <input type="email" name="email" placeholder='Email' onInput={handleChange} className={styles.form_inp}/>
            <p className={styles.error} >{formErrors.email.validity ? '' : formErrors.email.message}</p>
            <input type="password" name="password" onInput={handleChange} placeholder='Пароль' className={styles.form_inp}/>
            <p className={styles.error} >{formErrors.password.validity ? '' : formErrors.password.message}</p>
            <div className={styles.form_confident}>
                <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} name='remember' className={styles.form_checkbox}/>
                <p className={styles.text_confident}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
            </div>
            <button className={styles.form_btn} disabled={!(!btnDisabled && check)}>УЧАСТВОВАТЬ</button>
        </form>
    </div>
}
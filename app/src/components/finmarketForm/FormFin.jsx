import { useEffect, useState } from 'react'
import styles from './formFin.module.css'
import { Link } from 'react-router-dom'

export default function FormFin() {
    const[formElements, setFormElements] = useState({})
    const [formErrors, setFormErrors] = useState({})
    useEffect(() => {
       const arrKeys = Object.keys(formElements)
        arrKeys.forEach(key => {
            setFormErrors((prev) => ({...prev, [key] : formElements[key].value.length > 0 ? '' : 'Поле не должно быть пустым'}))  
        })
    }, [formElements])

    function handleChange(e) {
        setFormElements({...formElements, [e.target.name]: e.target})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {}
        for(let key in formElements){
            body[key] = formElements[key].value
        }
        console.log(body);
    }

    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <Link className={styles.link_nav}>ЗАЙМ</Link>
            <Link className={styles.link_nav}>РЕФИНАНСИРОВАНИЕ</Link>
            <Link className={styles.link_nav}>БАНКРОТСТВО</Link>
            <Link className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</Link>
        </nav>
        <hr className={styles.form_line}/>
        <form onSubmit={handleSubmit} className={styles.form}>
            <select  onChange={handleChange} name='select' className={styles.form_inp}>
                <option value="" className={styles.option}></option>
                <option value="Получить займ" className={styles.option}>Получить займ</option>
                <option value="Рефинансирование займа" className={styles.option}>Рефинансирование займа</option>
                <option value="Банкротство" className={styles.option}>Банкротство</option>
                <option value="Возврат долгов" className={styles.option}>Возврат долгов</option>
            </select>
            <input type="phone" name="phone" placeholder='Телефон' onInput={handleChange} className={styles.form_inp} required/>
            <p className={`${styles.error}`}>{formErrors.phone}</p>
            <input type="email" name="email" placeholder='Email' onInput={handleChange} className={styles.form_inp} required/>
            <p className={styles.error}>{formErrors.email}</p>
            <input type="password" name="password"  onInput={handleChange} placeholder='Пароль' className={styles.form_inp} required/>
            <p className={styles.error}>{formErrors.password}</p>
        <div className={styles.form_confident}>
            <input type="checkbox" name='remember' onChange={handleChange} className={styles.form_checkbox}/>
            <p className={styles.text_confident}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
        </div>
        <button className={styles.form_btn}>УЧАСТВОВАТЬ</button>
        </form>
    </div>
}
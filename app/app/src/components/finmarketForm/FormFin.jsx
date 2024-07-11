import { useEffect, useRef, useState } from 'react'
import styles from './formFin.module.css'
import { Link } from 'react-router-dom'
import validationForm from '../../common/validationForm'


export default function FormFin() {
    const check = useRef(null)
    const [formElements, setFormElements] = useState({phone: '', email: '', password: '', select: ''})
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState({
        select: {
            pattern: /^$|\s+/,
            message: 'Поле обязательно к заполнению',
        },
        phone: {
            pattern: /^[0-9]{11}$/,
            message: 'Номер телефона должен быть в формате 8XXXXXXXXXX',
            validity: true
        },
        email: {
            pattern:  /^[\w+]+@[\w+]+\.[\w]{2,}$/,
            message: 'Email должен быть в формате ******@***.***',
            validity: true
        },
        password: {
            pattern: /^[а-яА-ЯёЁa-zA-Z0-9]{6,}$/,
            message: 'Пароль должен быть больше 6 символов и сожедержать кирилицу, цифры и спецсимвол',
            validity: true
        },
    })

    useEffect(() => {
        validationForm(formElements, formErrors, setFormErrors)
        setBtnDisabled(!Object.keys(formErrors).every(key=> formErrors[key].validity) && check.current.checked)
        console.log(btnDisabled);
    }, [formElements, check])

    function handleChange(e) {
        setFormElements({...formElements, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formElements);
    }

    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <Link className={styles.link_nav}>ЗАЙМ</Link>
            <Link className={styles.link_nav}>РЕФИНАНСИРОВАНИЕ</Link>
            <Link className={styles.link_nav}>БАНКРОТСТВО</Link>
            <Link className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</Link>
        </nav>
        <hr className={styles.form_line}/>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <select  onChange={handleChange} name='select' className={styles.form_inp}>
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
                <input type="checkbox" ref={check} name='remember' className={styles.form_checkbox}/>
                <p className={styles.text_confident}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
            </div>
            <button className={styles.form_btn} disabled={btnDisabled}>УЧАСТВОВАТЬ</button>
        </form>
    </div>
}
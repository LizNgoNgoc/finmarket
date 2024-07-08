import { useEffect, useState } from 'react'
import styles from './formFin.module.css'
import { Link } from 'react-router-dom'

export default function FormFin() {
    const[formElements, setFormElements] = useState({select : "Получить займ" })
    const [formErrors, setFormErrors] = useState({
        phone: 'error',
        email: 'error',
        password: 'error'
    })

    useEffect(() => {
        formElements.phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        formElements.email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        formElements.password = /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g;

        formErrors.phone = 'error';
        formErrors.email = 'error';
        formErrors.password = 'error';
    }, [formElements])

    function handleChange(e) {
        setFormElements({...formElements, [e.target.name]: e.target.value})
    }

    // function handleError(e) {
    //     const valid = !formErrors(e)
    //     setFormErrors({...formErrors, [e.target.name] : valid})
    // }

    //onInput={(e) => handleError(e, formErrors.phone)}

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <select  onChange={(e) => setFormElements({...formElements, [e.target.name]: e.target.value})} name='select' className={styles.form_inp}>
                <option value="Получить займ" className={styles.option}>Получить займ</option>
                <option value="Рефинансирование займа" className={styles.option}>Рефинансирование займа</option>
                <option value="Банкротство" className={styles.option}>Банкротство</option>
                <option value="Возврат долгов" className={styles.option}>Возврат долгов</option>
            </select>
            <input type="phone" name="phone" placeholder='Телефон' onInput={handleChange} className={styles.form_inp}/>
            <p className={`${styles.error} ${formElements.phone ? styles.show : ''}`}>{formErrors.phone}</p>
            <input type="email" name="email" placeholder='Email' onInput={(e) => setFormElements({...formElements, [e.target.name]: e.target.value})} className={styles.form_inp}/>
            <p className={styles.error}>{formErrors.email}</p>
            <input type="password" name="password"  onInput={(e) => setFormElements({...formElements, [e.target.name]: e.target.value})} placeholder='Пароль' className={styles.form_inp}/>
            <p className={styles.error}>{formErrors.password}</p>
        <div className={styles.form_confident}>
            <input type="checkbox" name='remember'  onChange={(e) => setFormElements({...formElements, [e.target.name]: e.target.checked})} className={styles.form_checkbox}/>
            <p className={styles.text_confident}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</p>
        </div>
        <button className={styles.form_btn}>УЧАСТВОВАТЬ</button>
        </form>
    </div>
}
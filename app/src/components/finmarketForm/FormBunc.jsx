import styles from './formFin.module.css'
import { useState } from 'react'
import {useValidationForm, validationFin} from '../../common/validationForm'
import { useDispatch } from 'react-redux'
import { setForm } from '../../redux/RegFormSlice'

export default function FormBunc () {
    const diapatch = useDispatch()
    const [check, setCheck] = useState(false)
    const [formElements, handleChange, formErrors, btnDisabled] = useValidationForm({select:'',phone:'',email:'',password: '',}, validationFin)

    function handleSubmit(e) {
        e.preventDefault()
        diapatch(setForm(formElements))
    }

    return  <form onSubmit={handleSubmit} className={styles.form} noValidate>
    <select onChange={handleChange} name='select' className={styles.form_inp}>
        <option value="Банкротство" className={styles.option}>Банкротство</option>
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
}
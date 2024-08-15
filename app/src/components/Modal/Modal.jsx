import { useState } from 'react'
import styles from './Modal.module.css'
import { Link } from 'react-router-dom'


export default function Modal ({open}) {

    const [input, setInput] = useState({
        phone: 'phone'||'',
        email:  'email' || '',
        password: 'password' || '',
        repeatPass:  'repeatPass' || '',
    })

    function handleSubmit(e) {
        e.preventDefault()
    }

    return <section className={styles.overlay} onClick={(e) => e.target === e.currentTarget && open(false)}>
        <div className={styles.modal}>
        <nav className={styles.nav}>
            <div className={styles.nav_content}>вход</div>
            <div className={styles.nav_content}>регистрация</div>
        </nav>
        <hr className={styles.line}/>
        <div className={styles.container}>
            <div className={styles.step}>
                <div className={styles.number}>1</div>
                <div className={styles.text_container}>
                    <p className={styles.steptxt}>шаг</p>
                </div>
            </div>
            <div className={styles.srvice_container}>
                <div className={styles.get}>Получить услугу</div>
                <div className={styles.take}>Предоставить услугу</div>
            </div>
            <div className={styles.radio_container}>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Займы/Рефинансирование</label>
                </div>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Возврат долговых обязательств</label>
                </div>
                <div className={styles.radio_content}>
                    <input type="radio" className={styles.radio}/>
                    <label htmlFor="" className={styles.radio_label}>Банкротство</label>
                </div>
            </div>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputs_container}>
                    <div className={styles.inp_container}>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Телефон</label>
                            <input type="phone" value={input.phone} className={styles.input_text} onInput={(e) => setInput(e.target.value)}/>
                        </div>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Email</label>
                            <input type="email" value={input.email} className={styles.input_text} onInput={(e) => setInput(e.target.value)}/>
                        </div>
                    </div>
                    <div className={styles.inp_container}>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Пароль</label>
                            <input type="password" value={input.password} className={styles.input_text} onInput={(e) => setInput(e.target.value)}/>
                        </div>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Повторить пароль</label>
                            <input type="password" value={input.repeatPass} className={styles.input_text} onInput={(e) => setInput(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={styles.politic_container}>
                    <input type="checkbox" className={styles.check}/>
                    <label htmlFor="" className={styles.politic_text}>Я согласен на обработку данных согласно Пользовательскому соглашению и Политике конфиденциальности</label>
                </div>
                <Link to='/anket' className={styles.button} onClick={(e) =>e.currentTarget && open(false)}>зарегистрироваться</Link>
            </form>
        </div>
        </div>
    </section>
}
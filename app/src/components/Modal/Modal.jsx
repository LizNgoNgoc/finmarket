import styles from './Modal.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setForm } from '../../redux/RegFormSlice'

const Modal = ({open}) => {

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setForm())
    }

    function handleInp (e){
        // stateUserData.setStep1(e.target.name, e.target.value)    
    }


    return <section className={styles.overlay} onClick={(e) => e.target === e.currentTarget }>
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
                            <input type="phone" value={''} name='phone' className={styles.input_text} onChange={handleInp}/>
                        </div>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Email</label>
                            <input type="email" value={''} name='email' className={styles.input_text} onChange={handleInp}/>
                        </div>
                    </div>
                    <div className={styles.inp_container}>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Пароль</label>
                            <input type="password" value={''} name='password' className={styles.input_text} onChange={handleInp}/>
                        </div>
                        <div className={styles.text_inp}>
                            <label htmlFor="" className={styles.label_text}>Повторить пароль</label>
                            <input type="password" className={styles.input_text} />
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

export default Modal
import styles from './anket.module.css'
import { useState } from 'react';
import { observer } from 'mobx-react-lite'
import stateUserData from '../../store/modal';
import { useNavigate } from 'react-router-dom';

const Anket = observer(() => {
    const[stars, setStars] = useState([...Array(5)].fill(0))
    const [checked, setChecked] = useState(true)
    const navigate = useNavigate()

    function handleClick() {
        navigate('/lot')
    }

    function handleCheck() {
        setChecked(!checked)
    }

    function handleStar(index){
        console.log(index);
        
        setStars(stars.map((_, i) => i <= index ? 1 : 0))
    }
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(stateUserData.getStep2())
    }

    function handleInp(e) {
        stateUserData.setStep2(e.target.name, e.target.value)
    }

    return <section className={styles.anket}>
        <div className={styles.anket_page}>
            <div className={styles.link}>
                <span className={styles.txt}>Главная / </span><span className={styles.txt_grey}>Анкета</span>
            </div>
            <div className={styles.step}>
                <div className={styles.number}>2</div>
                <div className={styles.text_container}>
                    <p className={styles.steptxt}>шаг</p>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <h3 className={styles.header}>Анкета</h3>
            <div className={styles.rating}>
                {stars.map((star, index) => <div key={index} onClick={() => handleStar(index)} className={`${styles.greyStar} ${star > 0 && styles.star}`}></div> )}
            </div>
        </div>
        <div className={styles.organization}>
            <div className={styles.fisic}>Физическое лицо</div>
            <div className={styles.uri}>Юридическое лицо/ИП</div>
        </div>
        <nav className={styles.nav}>
            <div className={styles.nav_text}>Личные данные</div>
            <div className={styles.nav_text}>общая информация</div>
            <div className={styles.nav_text}>обязательства</div>
            <div className={styles.nav_text}>активы</div>
        </nav>
        <hr className={styles.line}/>
        <form action="" className={styles.form_cont} onSubmit={handleSubmit}>
            <h3 className={styles.header_contact}>Контактное лицо </h3>
            <div className={styles.contact_container}>
                <div className={styles.cont}>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Контактное лицо *</label>
                        <input type="text" className={styles.input} value={stateUserData.step2.user} name='user' onInput={handleInp}/>
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Телефон *</label>
                        <input type="text" className={styles.input} value={stateUserData.step2.phone} name='phone' onInput={handleInp}/>
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Email *</label>
                        <input type="text" className={styles.input} value={stateUserData.step2.email} name='email' onInput={handleInp}/>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Пол</label>
                        <input type="text" className={styles.input} value={stateUserData.step2.sex} name='sex' onInput={handleInp}/>
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Дата рождения</label>
                        <input type="text" className={styles.input} value={stateUserData.step2.dataBirth} name='dataBirth' onInput={handleInp}/>
                    </div>
                </div>
            </div>
            <h3 className={styles.header_contact}>Город регистрации</h3>
            <div className={styles.container_city}>
                    <label htmlFor="" className={styles.lab}>Город</label>
                    <input type="text" className={styles.input} value={stateUserData.step2.city} name='city' onInput={handleInp}/>
            </div>
            <h3 className={styles.header_contact}>Город фактического проживания</h3>
            <div className={styles.city_life}>
                <input type="checkbox" value={stateUserData.step2.sameAddress} name='sameAddress' onChange={handleCheck}/>
                <label htmlFor="" className={styles.registration}>Совпадает с городом регистрации</label>
            </div>
            <div className={styles.cont_own}>
                <div className={styles.container_form}>
                    <label htmlFor="" className={styles.lab}>Город</label>
                    <input type="text" className={styles.input} value={stateUserData.step2.registration} name='registration' onInput={handleInp}/>
                </div>
                <div className={styles.container_form}>
                    <label htmlFor="" className={styles.lab}>Тип собственности</label>
                    <input type="text" className={styles.input} value={stateUserData.step2.owner} name='owner' onInput={handleInp}/>
                </div>
            </div>
            <h3 className={styles.header_contact}>Другое</h3>
            <div className={styles.container_citizenship}>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Стоите ли вы на Наркологическом или Психиатрическом учете: </p>
                    <div className={styles.answer}>
                        <input type="radio" name='psy'onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" name='psy'onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                </div>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Являетесь ли вы резидентом РФ: </p>
                    <div className={styles.answer}>
                        <input type="radio" name='residentRussia' onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" name='residentRussia' onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                </div>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Являетесь ли вы гражданином РФ:</p>
                    <div className={styles.answer}>
                        <input type="radio" name='citizen' onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" name='citizen' onChange={handleCheck}/>
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                    <div className={styles.input_city}>
                        <input type="text" className={styles.input} value={stateUserData.step2.citizenship} name='citizenship' onInput={handleInp}/>
                    </div>
                </div>
                <div className={styles.input_city_media}>
                        <input type="text" className={styles.input} value={stateUserData.step2.citizenship} name='citizenship' onInput={handleInp}/>
                </div>
            </div>
           <div className={styles.link_btn}>
                <button type='button' onClick={handleClick} className={styles.button}>следующий шаг</button>
           </div>
        </form>
    </section>
})

export default Anket
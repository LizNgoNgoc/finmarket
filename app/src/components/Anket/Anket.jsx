import styles from './anket.module.css'
import { Link } from 'react-router-dom'

export default function Abket() {
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
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return( <img src="./images/anket/star.svg" alt="star" key={index}/>)})}
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
        <form action="" className={styles.form_cont}>
            <h3 className={styles.header_contact}>Контактное лицо </h3>
            <div className={styles.contact_container}>
                <div className={styles.cont}>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Контактное лицо *</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Телефон *</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Email *</label>
                        <input type="text" className={styles.input} />
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Пол</label>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.container_form}>
                        <label htmlFor="" className={styles.lab}>Дата рождения</label>
                        <input type="text" className={styles.input} />
                    </div>
                </div>
            </div>
            <h3 className={styles.header_contact}>Город регистрации</h3>
            <div className={styles.container_city}>
                    <label htmlFor="" className={styles.lab}>Город</label>
                    <input type="text" className={styles.input} />
            </div>
            <h3 className={styles.header_contact}>Город фактического проживания</h3>
            <div className={styles.city_life}>
                <input type="checkbox" />
                <label htmlFor="" className={styles.registration}>Совпадает с городом регистрации</label>
            </div>
            <div className={styles.cont_own}>
                <div className={styles.container_form}>
                    <label htmlFor="" className={styles.lab}>Город</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.container_form}>
                    <label htmlFor="" className={styles.lab}>Тип собственности</label>
                    <input type="text" className={styles.input} />
                </div>
            </div>
            <h3 className={styles.header_contact}>Другое</h3>
            <div className={styles.container_citizenship}>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Стоите ли вы на Наркологическом или Психиатрическом учете: </p>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                </div>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Являетесь ли вы резидентом РФ: </p>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                </div>
                <div className={styles.psy}>
                    <p className={styles.psy_health}>Являетесь ли вы гражданином РФ: </p>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Да</label>
                    </div>
                    <div className={styles.answer}>
                        <input type="radio" />
                        <label htmlFor="" className={styles.answer_text}>Нет</label>
                    </div>
                    <div className={styles.input_city}>
                        <input type="text" className={styles.input} />
                    </div>
                </div>
            </div>
           <div className={styles.link_btn}>
                <Link to='/lot' className={styles.button}>следующий шаг</Link>
           </div>
        </form>
    </section>
}
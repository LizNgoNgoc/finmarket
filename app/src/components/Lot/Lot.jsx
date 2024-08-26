import styles from './lot.module.css'
import { observer } from 'mobx-react-lite'
import stateUserData from '../../store/modal';
import { useState } from 'react';

const Lot = observer(() => {

    const [checked, setChecked] = useState(false)

    function handleChange() {
        setChecked(!checked)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(stateUserData.getStep2())
    }

    function handleInp(e) {
        stateUserData.setStep2(e.target.name, e.target.value)
    }

    return <section className={styles.lot}>
        <div className={styles.step}>
                <div className={styles.number}>3</div>
                <div className={styles.text_container}>
                    <p className={styles.steptxt}>шаг</p>
                </div>
        </div>
        <h3 className={styles.header}>Создать лот</h3>
        <nav className={styles.nav}>
            <div className={styles.nav_item}>Займы</div>
            <div className={styles.nav_item}>Рефинансирование</div>
            <div className={styles.nav_item}>Банкротство</div>
            <div className={styles.nav_item}>Возврат долгов</div>
            <div className={styles.nav_item}>мОИ ТОРГИ</div>
        </nav>
        <hr className={styles.line}/>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.container_info}>
                <label htmlFor="" className={styles.label}>Населенный пункт получения услуги</label>
                <input type="text" className={styles.input_text} value={stateUserData.step3.getService} name='service' onInput={handleInp}/>
            </div>
            <div className={styles.container_inputs}>
                <div className={styles.container_info}>
                    <label htmlFor="" className={styles.label}>Сумма займа от ₽</label>
                    <input type="text" className={styles.input_text} value={stateUserData.step3.sum} name='sum' onInput={handleInp}/>
                </div>
                <div className={styles.container_info}>
                    <label htmlFor="" className={styles.label}>Срок займа, мес.</label>
                    <input type="text" className={styles.input_text} value={stateUserData.step3.sumMonth} name='sum' onInput={handleInp}/>
                </div>
                <div className={styles.container_info}>
                    <label htmlFor="" className={styles.label}>Желаемая ставка, % годовых</label>
                    <input type="text" className={styles.input_text} value={stateUserData.step3.percent} name='percent' onInput={handleInp}/>
                </div>
            </div>
            <div className={styles.position_container}>
                <div className={styles.check_container}>
                    <p className={styles.header_check}>Обеспечение:</p>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Недвижимость</label>
                    </div>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Автотранспорт</label>
                    </div>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Драгоценность</label>
                    </div>
                </div>
                <div className={styles.check_container}>
                    <p className={styles.header_check}>Кто участвует в торгах:</p>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Ломбард</label>
                    </div>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Кредитный брокер</label>
                    </div>
                    <div className={styles.checkbox_container}>
                        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={handleChange}/>
                        <label htmlFor="" className={styles.check_label}>Частный кредитор</label>
                    </div>
                </div>
            </div>
            <button className={styles.button}>далее</button>
        </form>
    </section>
})

export default Lot
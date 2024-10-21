import { useState } from 'react'
import styles from './formFin.module.css'
import FormBorrow from './FormBorrow'
import FormRefinance from './FormRefinance'
import FormDebts from './FormDebts'
import FormBunc from './FormBunc'



export default function FormFin() {
    const [show, setShow] = useState({
        borrow: true,
        refinance: false,
        bunc: false,
        debts: false,
    })


    function switchState (){
        setShow()
    }


    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <button className={styles.link_nav} onClick={() => switchState(true, false, false, false)}>ЗАЙМ</button>
            <button className={styles.link_nav} onClick={() => switchState(false, true, false, false)}>РЕФИНАНСИРОВАНИЕ</button>
            <button className={styles.link_nav} onClick={() => switchState(false, false, true, false)}>БАНКРОТСТВО</button>
            <button className={styles.link_nav} onClick={() => switchState(false, false, false, true)}>ВОЗВРАТ ДОЛГОВ</button>
        </nav>
        <hr className={styles.form_line}/>
        {show && <FormBorrow />}
        {show && <FormRefinance />}
        {show && <FormDebts />}
        {show && <FormBunc />}
    </div>
}
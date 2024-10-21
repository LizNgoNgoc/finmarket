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


    function switchState (key){
        setShow({...show, borrow: false, refinance: false, bunc: false, debts: false, [key]: true})
    }


    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <button className={styles.link_nav} name={show.borrow} onClick={() => switchState('borrow')}>ЗАЙМ</button>
            <button className={styles.link_nav} name={show.refinance}  onClick={() => switchState('refinance')}>РЕФИНАНСИРОВАНИЕ</button>
            <button className={styles.link_nav} name={show.bunc}  onClick={() => switchState('bunc')}>БАНКРОТСТВО</button>
            <button className={styles.link_nav} name={show.debts} onClick={() => switchState('debts')}>ВОЗВРАТ ДОЛГОВ</button>
        </nav>
        <hr className={styles.form_line}/>
        {show.borrow && <FormBorrow />}
        {show.refinance && <FormRefinance />}
        {show.bunc && <FormBunc />}
        {show.debts && <FormDebts />}
    </div>
}
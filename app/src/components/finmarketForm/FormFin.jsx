import { useState } from 'react'
import styles from './formFin.module.css'
import FormBorrow from './FormBorrow'
import FormRefinance from './FormRefinance'
import FormDebts from './FormDebts'
import FormBunc from './FormBunc'



export default function FormFin() {
    const [showBorrow, setShowBorrow] = useState(true)
    const [showRef, setShowRef] = useState(false)
    const [showBunc, setShowBunc] = useState(false)
    const [showDebts, setShowDebts] = useState(false)

    function switchState (b1, b2, b3, b4){
        setShowBorrow(b1)
        setShowRef(b2)
        setShowBunc(b3)
        setShowDebts(b4)
    }


    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <button className={styles.link_nav} onClick={() => switchState(true, false, false, false)}>ЗАЙМ</button>
            <button className={styles.link_nav} onClick={() => switchState(false, true, false, false)}>РЕФИНАНСИРОВАНИЕ</button>
            <button className={styles.link_nav} onClick={() => switchState(false, false, true, false)}>БАНКРОТСТВО</button>
            <button className={styles.link_nav} onClick={() => switchState(false, false, false, true)}>ВОЗВРАТ ДОЛГОВ</button>
        </nav>
        <hr className={styles.form_line}/>
        {showBorrow && !showRef && !showBunc && !showDebts && <FormBorrow />}
        {!showBorrow && showRef && !showBunc && !showDebts && <FormRefinance />}
        {!showBorrow && !showRef && showBunc && !showDebts && <FormDebts />}
        {!showBorrow && !showRef && !showBunc && showDebts && <FormBunc />}
    </div>
}
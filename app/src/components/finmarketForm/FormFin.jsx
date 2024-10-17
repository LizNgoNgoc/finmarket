import { useState } from 'react'
import styles from './formFin.module.css'
import { current } from '@reduxjs/toolkit'
import FormBorrow from './FormBorrow'
import FormRefinance from './FormRefinance'



export default function FormFin() {
    const [show, setShow] = useState(false)

    const handleBorrow = (e) => {
        setShow(current => !current)
    }

    const handleRef = (e) => {
        setShow(current => !current)
    }

    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <button className={styles.link_nav} onClick={handleBorrow}>ЗАЙМ</button>
            <button className={styles.link_nav} onClick={handleRef}>РЕФИНАНСИРОВАНИЕ</button>
            <button className={styles.link_nav}>БАНКРОТСТВО</button>
            <button className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</button>
        </nav>
        <hr className={styles.form_line}/>
        {show && <FormBorrow />}
        {show && <FormRefinance />}
    </div>
}
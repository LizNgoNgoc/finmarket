import styles from './formFin.module.css'
import { Link } from 'react-router-dom'
import FormBorrow from '../Forms/FormBorrow'



export default function FormFin() {
    
    
    return <div className={styles.form_container}>
        <nav className={styles.nav_form}>
            <Link to='/borrow' className={styles.link_nav}>ЗАЙМ</Link>
            <Link to='/refinance' className={styles.link_nav}>РЕФИНАНСИРОВАНИЕ</Link>
            <Link to='/buncrutcy' className={styles.link_nav}>БАНКРОТСТВО</Link>
            <Link to='/debts' className={styles.link_nav}>ВОЗВРАТ ДОЛГОВ</Link>
        </nav>
        <hr className={styles.form_line}/>
        <FormBorrow />
    </div>
}
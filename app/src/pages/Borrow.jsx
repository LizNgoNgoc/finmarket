import styles from './borrow.module.css'
import BorrowInfo from '../components/borrowInfo/BorrowInfo'
import Scheme from '../components/serviceScheme/Scheme'

export default function Borrow() {
    return <section className={styles.borrow}>
        <BorrowInfo/>
        <hr className={styles.line}/>
        <Scheme/>
        <hr className={styles.line}/>
    </section>
}
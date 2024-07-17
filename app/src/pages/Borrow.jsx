import styles from './borrow.module.css'
import BorrowInfo from '../components/borrowInfo/BorrowInfo'
import Scheme from '../components/serviceScheme/Scheme'
import PayAttention from '../components/attention/PayAttantion'

export default function Borrow() {
    return <section className={styles.borrow}>
        <BorrowInfo/>
        <hr className={styles.line}/>
        <Scheme/>
        <hr className={styles.line}/>
        <PayAttention/>
    </section>
}
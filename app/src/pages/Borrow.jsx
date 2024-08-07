import styles from './borrow.module.css'
import BorrowInfo from '../components/borrowInfo/BorrowInfo'
import Scheme from '../components/serviceScheme/Scheme'
import PayAttentionBorrow from '../components/attention/PayAttentionBorrow'
import BorrowForm from '../components/borrowForm/BorrowForm'

export default function Borrow() {
    return <section className={styles.borrow}>
        <BorrowInfo/>
        <hr className={styles.line}/>
        <Scheme/>
        <hr className={styles.line}/>
        <PayAttentionBorrow/>
        <BorrowForm/>
    </section>
}
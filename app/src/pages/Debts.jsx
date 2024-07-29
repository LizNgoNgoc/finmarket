import styles from './borrow.module.css'
import SchemeBunc from '../components/serviceScheme/Scheme'
import PayAttention from '../components/attention/PayAttantion'
import DebtsInfo from '../components/debtsInfo/DebtsInfo'

export default function Debts() {
    return <section className={styles.borrow}>
        <DebtsInfo/>
        <hr className={styles.line}/>
        <SchemeBunc/>
        <hr className={styles.line}/>
        <PayAttention/>
    </section>
}
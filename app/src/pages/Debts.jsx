import styles from './borrow.module.css'
import SchemeBunc from '../components/schemeBunc/SchemeBunc'
import PayAttentionDebts from '../components/attention/PayAttantionDebts'
import DebtsInfo from '../components/debtsInfo/DebtsInfo'
import DebtsForm from '../components/formDebts/DebtsForm'


export default function Debts() {
    return <section className={styles.borrow}>
        <DebtsInfo/>
        <hr className={styles.line}/>
        <SchemeBunc/>
        <hr className={styles.line}/>
        <PayAttentionDebts/>
        <DebtsForm/>
    </section>
}
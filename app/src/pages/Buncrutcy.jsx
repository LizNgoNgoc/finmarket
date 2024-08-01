import styles from './borrow.module.css'
import BuncrutcyInfo from '../components/buncrutcyInfo/BuncrutcyInfo'
import SchemeBunc from '../components/schemeBunc/SchemeBunc'
import PayAttentionBunc from '../components/attention/PayAttentionBuncr'
import BuncForm from '../components/buncForm/BuncForm'

export default function Buncrutcy() {
    return <section className={styles.borrow}>
        <BuncrutcyInfo/>
        <hr className={styles.line}/>
        <SchemeBunc/>
        <hr className={styles.line}/>
        <PayAttentionBunc/>
        <BuncForm/>
    </section>
}
import styles from './borrow.module.css'
import BuncrutcyInfo from '../components/buncrutcyInfo/BuncrutcyInfo'
import SchemeBunc from '../components/schemeBunc/SchemeBunc'
import PayAttention from '../components/attention/PayAttantion'
import BuncForm from '../components/buncForm/BuncForm'

export default function Buncrutcy() {
    return <section className={styles.borrow}>
        <BuncrutcyInfo/>
        <hr className={styles.line}/>
        <SchemeBunc/>
        <hr className={styles.line}/>
        <PayAttention/>
        <BuncForm/>
    </section>
}
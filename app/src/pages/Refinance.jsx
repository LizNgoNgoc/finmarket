import styles from './borrow.module.css'
import RefinanceInfo from '../components/refinance/RefinanceInfo'
import Scheme from '../components/serviceScheme/Scheme'
import PayAttention from '../components/attention/PayAttantion'
import RefinanceForm from '../components/refinanceForm/RefinanceForm'

export  default function Refinance() {
    return <section className={styles.borrow}>
        <RefinanceInfo/>
        <hr className={styles.line}/>
        <Scheme/>
        <hr className={styles.line}/>
        <PayAttention/>
        <RefinanceForm/>
    </section>
}
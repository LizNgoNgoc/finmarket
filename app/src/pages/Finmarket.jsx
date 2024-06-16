import FormFin from "../components/finmarketForm/FormFin"
import styles from './finmarket.module.css'

export default function Finmarket() {
    return <section className={styles.section_fin}> 
        <FormFin/>
    </section>
}
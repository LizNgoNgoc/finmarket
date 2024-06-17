import FormFin from "../components/finmarketForm/FormFin"
import styles from './finmarket.module.css'

export default function Finmarket() {
    return <section className={styles.section_fin}> 
        <div className={styles.fin_container}>
            <img src="./images/finmatketPage/scobe_up.png" className={styles.scobe_up} alt="scobe" />
            <img src="./images/finmatketPage/finmarketPro.png" className={styles.fin_pro} alt="finmarket" />
            <img src="./images/finmatketPage/scobe_down.png" className={styles.scobe_down} alt="scobe" />
            <p className={styles.text_fin}>Отправьте заявку на торги или создайте “Готовое предложение”.За вашу заявку будуь торговатьсяболее 100 организаций</p>
        </div>
        <FormFin/>
    </section>
}
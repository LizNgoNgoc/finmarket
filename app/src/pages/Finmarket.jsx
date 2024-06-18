import FormFin from "../components/finmarketForm/FormFin"
import styles from './finmarket.module.css'
import FinServiceRules from "../components/finmarketServiceRules/FinServiceRules";
import Trade from "../components/onlineTrade/Trade";


export default function Finmarket() {
    return <section className={styles.section_finmarket}> 
        <div className={styles.section_fin}>
            <div className={styles.container_info}>
            <div className={styles.fin_container}>
                <img src="./images/finmatketPage/scobe_up.png" className={styles.scobe_up} alt="scobe" />
                <img src="./images/finmatketPage/finmarketPro.png" className={styles.fin_pro} alt="finmarket" />
                <img src="./images/finmatketPage/scobe_down.png" className={styles.scobe_down} alt="scobe" />
                <p className={styles.text_fin}>Отправьте заявку на торги или создайте “Готовое предложение”. За вашу заявку будут торговаться более 100 организаций</p>  
            </div>
                <FormFin/>
            </div>
                <hr className={styles.service_line}/>
                <FinServiceRules/>
                <hr className={styles.service_line}/>
                <Trade/>
        </div>
    </section>
}
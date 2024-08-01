import FormFin from "../components/finmarketForm/FormFin"
import styles from './finmarket.module.css'
import FinServiceRules from "../components/finmarketServiceRules/FinServiceRules";
import Trade from "../components/onlineTrade/Trade";
import Services from "../components/ourServices/Services";
import Advantages from "../components/advantages/Advantages";
import Territory from "../components/territory/Territory";
import News from "../components/news/News";
import Modal from "../components/Modal/Modal";
import { createPortal } from 'react-dom';
import { useState } from "react";


export default function Finmarket() {

    const [openModal, setOpenModal] = useState(true)


    return <section className={styles.section_finmarket}> 
        <div className={styles.section_fin}>
            <div className={styles.fin_content}>
                <div className={styles.container_info}>
                <div className={styles.fin_container}>
                    <img src="./images/finmatketPage/scobe_up.png" className={styles.scobe_up} alt="scobe" />
                    <img src="./images/finmatketPage/finmarketPro.png" className={styles.fin_pro} alt="finmarket" />
                    <img src="./images/finmatketPage/scobe_down.png" className={styles.scobe_down} alt="scobe" />
                    <p className={styles.text_fin}>Отправьте заявку на торги или создайте “Готовое предложение”.</p> 
                    <p className={styles.text_fin_sec}>За вашу заявку будут торговаться более 100 организаций</p> 
                </div>
                    <FormFin/>
                </div>
            </div>
                <hr className={styles.service_line}/>
                <FinServiceRules/>
                <hr className={styles.service_line}/>
                <Trade/>
                <Services/>
                <Advantages/>
                <Territory/>
                <News/>
                {openModal && createPortal(<Modal open={setOpenModal} />, document.body)}
        </div>
    </section>
}
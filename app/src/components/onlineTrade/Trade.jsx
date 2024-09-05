import styles from './trade.module.css'
import { Link } from 'react-router-dom'
import { trade } from './TradeObjects'
import TradeBlock from './TradeBlock'

export default function Trade() {
   

    return <section className={styles.trade}>
        <h2 className={styles.header_trade}>Онлайн табло торгов и готовых предложений</h2>
        <div className={styles.trade_category}>
            <div className={styles.category_trades}>ТОРГИ ОНЛАЙН</div>
            <div className={styles.category_offers}>ГОТОВЫЕ ПРЕДЛОЖЕНИЯ</div>
        </div>
            <nav className={styles.nav}>
                <Link className={styles.nav_category}>ЗАЙМЫ</Link>
                <Link className={styles.nav_category}>РЕФИНАНСИРОВАНИЕ</Link>
                <Link className={styles.nav_category}>БАНКРОТСТВО</Link>
                <Link className={styles.nav_category}>ВОЗВРАТ ДОЛГОВ</Link>
            </nav>
            <div className={styles.table_container}>
                <div className={styles.table_category}>
                    <p className={styles.table_td}>№</p>
                    <p className={styles.table_td}>ОБЕСПЕЧЕНИЕ</p>
                    <p className={styles.table_td}>СУММА/СРОК</p>
                    <p className={styles.table_td}>ЗАЁМЩИК</p>
                    <p className={styles.table_td}>УЧАСТНИКИ</p>
                    <p className={styles.table_td}>ПРОЦЕНТ</p>
                    <p className={styles.table_td}>НАС.ПУНКТ</p>
                    <p className={styles.table_td}>СТАТУС</p>
                    <div className={styles.empty}></div>
                </div>
            {trade.map((item, index) => {
                return <TradeBlock  key={index} item={item}/>
            })}
            <hr className={styles.line_category} />
            <button className={styles.archive_btn}>АРХИВ ТОРГОВ</button>
            </div>
            <div className={styles.media}>
                <hr />
                <div className={styles.media_table}>
                    <div></div>
                    <div></div>
                </div>
            </div>
    </section>
}
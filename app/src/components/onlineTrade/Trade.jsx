import styles from './trade.module.css'
import { Link } from 'react-router-dom'
import { trade } from './TradeObjects'

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
                </div>
            {trade.map((item, index) => {
                return <div>
                    <hr className={styles.line_category}/>
                        <div className={styles.table_names}>
                <p className={styles.table_td}>211</p>
            <div>
                <p className={styles.table_td}>Займ</p>
                <div className={styles.provision}>
                    <img src={item.imgCat} alt="category" />
                    <p className={styles.table_td}>{item.nameCat}</p>
                </div>
            </div>
                <div>
                    <p className={styles.table_td}>{item.price}</p>
                <div className={styles.container_category}>
                    <img src="./images/offers/Time.png"  className={styles.img_time} alt="time" />
                    <p className={styles.table_td}>{item.month} мес</p>
                </div>
                </div>
                <div>
                    <p className={styles.table_td}>{item.borrow}</p>
                    <img src={item.imgRating}  alt="stars" />
                </div>
                <div>
                    <p className={styles.table_td}>ломбард</p>
                    <p className={styles.table_td}>кредитный брокер</p>
                </div>
                <p className={styles.table_td}>8% годовых</p>
                <p className={styles.table_td}>{item.city}</p>
                <p className={styles.table_td}>{item.status}</p>
                <button className={styles.table_btn}>РАЗВЕРНУТЬ</button>
            </div>
            </div>
            })}
            <hr className={styles.line_category} />
            <button className={styles.archive_btn}>АРХИВ ТОРГОВ</button>
            </div>
        <div></div>
    </section>
}
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
                <div className={styles.table_names}>
                    <p className={styles.table_td}>211</p>
                <div>
                    <p className={styles.table_td}>Займ</p>
                    <div className={styles.provision}>
                        <img src="./images/offers/Diamond.png" alt="category" />
                        <p className={styles.table_td}>Автотранспорт</p>
                    </div>
                </div>
                    <div>
                        <p className={styles.table_td}>96,000 ₽</p>
                    <div className={styles.provision}>
                        <img src="./images/offers/Time.png"  alt="time" />
                        <p className={styles.table_td}>18 мес</p>
                    </div>
                    </div>
                    <div>
                        <p className={styles.table_td}>Физ.лица</p>
                        <img src="./images/offers/stars.png"  alt="stars" />
                    </div>
                    <div>
                    <p className={styles.table_td}>ломбард</p>
                    <p className={styles.table_td}>кредитный брокер</p>
                    </div>
                    <p className={styles.table_td}>8% годовых</p>
                    <p className={styles.table_td}>Санкт-Петербург</p>
                    <p className={styles.table_td}>Завершены</p>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {trade.map((item, index) => {
                return <div>
                    <hr className={styles.line}/>
                        <div className={styles.table_names}>
                <p className={styles.table_td}>211</p>
            <div>
                <p className={styles.table_td}>Займ</p>
                <div className={styles.provision}>
                    <img src="./images/offers/Diamond.png" alt="category" />
                    <p className={styles.table_td}>Автотранспорт</p>
                </div>
            </div>
                <div>
                    <p className={styles.table_td}>96,000 ₽</p>
                <div className={styles.provision}>
                    <img src="./images/offers/Time.png"  alt="time" />
                    <p className={styles.table_td}>18 мес</p>
                </div>
                </div>
                <div>
                    <p className={styles.table_td}>Физ.лица</p>
                    <img src="./images/offers/stars.png"  alt="stars" />
                </div>
                <div>
                <p className={styles.table_td}>ломбард</p>
                <p className={styles.table_td}>кредитный брокер</p>
                </div>
                <p className={styles.table_td}>8% годовых</p>
                <p className={styles.table_td}>Санкт-Петербург</p>
                <p className={styles.table_td}>Завершены</p>
            </div>
                    </div>
            })}
        <div></div>
    </section>
}
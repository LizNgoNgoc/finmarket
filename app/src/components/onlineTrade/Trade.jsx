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
                <div className={styles.container_media}>
                    <div className={styles.media_table}>
                        <div className={styles.table_headers}>
                            <p className={styles.table_td}>№</p>
                            <p className={styles.table_td}>Обеспечение</p>
                            <p className={styles.table_td}>Сумма/Срок</p>
                            <p className={styles.table_td}>Заёмщик</p>
                            <p className={styles.table_td}>Участники</p>
                            <p className={styles.table_td}>ПРОЦЕНТ</p>
                            <p className={styles.table_td}>Нас.пункт</p>
                            <p className={styles.table_td}>Статус</p>
                        </div>
                        {/* {trade.map((item, index) => { */}
                    {/* return  */}
                    <div className={styles.card}>
                        <p className={styles.media_text}>211</p>
                        <div className={styles.media_block}>
                            <p className={styles.media_text}>Займ </p>
                            <p className={styles.media_text}>Автотранспорт</p>
                        </div>
                        <div className={styles.media_block}>
                            <p className={styles.media_text}>96,000 ₽</p>
                            <p className={styles.media_text}>18 мес</p>
                        </div>
                        <div className={styles.media_block}>
                            <p className={styles.media_text}>Физ.лица</p>
                            <img src="" alt="" />
                        </div>
                        <p className={styles.media_text}>ломбард, частный кредитор</p>
                        <p className={styles.media_text}>8% годовых</p>
                        <p className={styles.media_text}>Санкт-Петербург</p>
                        <p className={styles.media_text}>Завершены</p>
                    </div>
            {/* })} */}
                    </div>
                    <button className={styles.btn_media}>ПОСМОТРЕТЬ</button>
                </div> 
                <button className={styles.btn_arch}>архив торгов</button>
            </div>
    </section>
}
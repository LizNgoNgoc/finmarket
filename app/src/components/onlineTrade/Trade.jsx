import styles from './trade.module.css'
import { Link } from 'react-router-dom'

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
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        <div></div>
    </section>
}
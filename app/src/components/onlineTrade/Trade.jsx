import styles from './trade.module.css'
import { Link } from 'react-router-dom'

export default function Trade() {
    return <section className={styles.trade}>
        <h2 className={styles.header_trade}>Онлайн табло торгов и готовых предложений</h2>
        <div className={styles.trade_category}>
            <div className={styles.category_trades}>ТОРГИ ОНЛАЙН</div>
            <div className={styles.category_offers}>ГОТОВЫЕ ПРЕДЛОЖЕНИЯ</div>
        </div>
        <div>
            <nav>
                <Link>ЗАЙМЫ</Link>
                <Link>РЕФИНАНСИРОВАНИЕ</Link>
                <Link>БАНКРОТСТВО</Link>
                <Link>ВОЗВРАТ ДОЛГОВ</Link>
            </nav>
            <table></table>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
    </section>
}
import styles from './trade.module.css'
import { Link } from 'react-router-dom'

export default function Trade() {
    return <section>
        <h2>Онлайн табло торгов и готовых предложений</h2>
        <div>
            <div>ТОРГИ ОНЛАЙН</div>
            <div>ГОТОВЫЕ ПРЕДЛОЖЕНИЯ</div>
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
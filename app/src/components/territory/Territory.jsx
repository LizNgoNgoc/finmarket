import styles from './territory.module.css'

export default function Territory() {
    return <section className={styles.territory}>
        <h2 className={styles.territory_header}>Мы представлены на всей территории РФ</h2>
        <div className={styles.img_container}>
            <img src="./images/territory/card.png" className={styles.img} alt="img" />
            <img src="./images/territory/cart_media.png" className={styles.img_media} alt="img_media" />
            <div className={styles.card_container}>
                <h3 className={styles.header_card}>более 1000</h3>
                <p className={styles.text_card}>готовы дать вам лучшее предложение</p>
            </div>
            <div className={styles.card_container_cityes}>
                <h3 className={styles.header_card}>55</h3>
                <p className={styles.text_card}>городов присутствия</p>
            </div>
            <div className={styles.card_container_clients}>
                <h3 className={styles.header_card}>более 1000</h3>
                <p className={styles.text_card}>клиентов получивших услугу</p>
            </div>
        </div>
        <hr className={styles.territory_line}/>
        <div className={styles.coin_container}>
            <div>
                <h3 className={styles.name_coin}>USD</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>EUR</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>JPY</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>SEK</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>AUD</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>CNY</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>DKK</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>KRW</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>GBP</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>CHF</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
        </div>
        <div className={styles.coin_container_media}>
            <div>
                <h3 className={styles.name_coin}>USD</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>EUR</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
            <div>
                <h3 className={styles.name_coin}>JPY</h3>
                <p className={styles.value_coin}>60,8685</p>
            </div>
        </div>
    </section>
}
import styles from './trade.module.css'

export default function Completed({item}) {
    return <section className={`${styles.completed}`}>
        <div  className={styles.container_info}>
            {item.cardTrade.map((item, index) => {
                return   <div key={index} className={index % 2 === 1 ? styles.bigger_container : styles.less_container}>
                    <h3 className={styles.header_first}>{item.title}</h3>
                    <p className={styles.paragraph_container}>{item.paragraph}</p>
                    <p className={styles.percent}>{item.percent}</p>
                    <p className={styles.win}>{item.winner}</p>
                 </div>
                })
            }
            </div>
        <button className={styles.watch_btn}>ПОСМОТРЕТЬ</button>
    </section>
}
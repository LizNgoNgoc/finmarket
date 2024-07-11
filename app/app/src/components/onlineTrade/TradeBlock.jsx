import styles from './trade.module.css'
import Completed from './Completed'
import { useState } from 'react'

export default function TradeBlock({item}) {
    const [view, setView] = useState(false)


    return <div className={`${styles.table_flex} ${view && styles.toggle}`}>
                <hr className={styles.line_category}/>
                    <div className={styles.table_names}>
            <p className={styles.table_td}>211</p>
            <div className={styles.table_td}>
            <p className={styles.table_td}>Займ</p>
            <div className={styles.provision}>
                <img src={item.imgCat} alt="category" />
                <p className={styles.table_td}>{item.nameCat}</p>
            </div>
            </div>
            <div className={styles.table_td}>
                <p className={styles.table_td}>{item.price}</p>
            <div className={styles.container_category}>
                <img src="./images/offers/Time.png"  className={styles.img_time} alt="time" />
                <p className={styles.table_td}>{item.month} мес</p>
            </div>
            </div>
            <div className={styles.table_td}>
                <p className={styles.table_td}>{item.borrow}</p>
                <div>
                    {Array(5).fill().map((e, index) => {
                        return <img key={index} src={index > item.rating - 1  ? './images/offers/StarGrey.png' : './images/offers/StarYellow.png'}  alt="stars" />
                    })}
                </div>
            </div>
            <div className={styles.table_td}>
                <p className={styles.table_td}>ломбард</p>
                <p className={styles.table_td}>кредитный брокер</p>
            </div>
            <p className={styles.table_td}>8% годовых</p>
            <p className={styles.table_td}>{item.city}</p>
            <p className={styles.table_td}>{item.status}</p>
            <button className={styles.table_btn} onClick={() => setView(!view)}>{view ? 'СВЕРНУТЬ' : 'РАЗВЕРНУТЬ'}</button>
            </div>
            <Completed item={item}/>
        </div>
    }
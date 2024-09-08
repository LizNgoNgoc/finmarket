import styles from './news.module.css'
import { Blog, BlogMedia } from './NewsContent'

export default function News() {
    return <section className={styles.news}>
        <h2 className={styles.header_news}>Лента новостей</h2>
        <div className={styles.news_container}>
            {Blog.map((item, index) => {
                return <div key={index} className={styles.blog_container}>
                    <img src={item.img} className={styles.img_news} alt="img" />
                    <h3 className={styles.title_news}>{item.title}</h3>
                    <p className={styles.data_news}>{item.data}</p>
                </div>
            })}
        </div>
        <div className={styles.news_media}>
            {BlogMedia.map((item, index) => {
                return <div key={index} className={styles.blog_container}>
                    <img src={item.img} className={styles.img_news} alt="img" />
                    <h3 className={styles.title_news}>{item.title}</h3>
                    <p className={styles.data_news}>{item.data}</p>
                </div>
            })}
        </div>
    </section>
}
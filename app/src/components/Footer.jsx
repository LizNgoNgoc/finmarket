import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <section className={styles.footer}>
        <hr className={styles.footer_line}/>
        <div className={styles.footer_container}>
            <div className={styles.link_content_media}>
                    <Link className={styles.footer_link}>Пользовательское соглашение</Link>
                    <Link className={styles.footer_link}>Политика конфиденциальности</Link>
                    <Link className={styles.footer_link}>Рекламодателям и партнерам</Link>
                    <Link className={styles.footer_link}>Контакты</Link>
                </div>
            <div className={styles.logo_container}>
                <img src="./images/header/logo.svg" className={styles.logo_img} alt="img" />
                <p className={styles.text_logo}>информационно-коммуникационный ресурс</p>
                <div className={styles.media_container}>
                    <img src="./images/footer/Mail.png" className={styles.media} alt="img" />
                    <img src="./images/footer/vk.png" className={styles.media} alt="img" />
                </div>
            </div>
            <div className={styles.links_container}>
                <div className={styles.link_content}>
                    <Link className={styles.footer_link}>Предоставление займа</Link>
                    <Link className={styles.footer_link}>Рефинансирование займа</Link>
                    <Link className={styles.footer_link}>Банкротство</Link>
                    <Link className={styles.footer_link}>Возврат и продление займа</Link>
                    <Link className={styles.footer_link}>Юридическая консультация</Link>
                </div>
                <div className={styles.link_content}>
                    <Link className={styles.footer_link}>Пользовательское соглашение</Link>
                    <Link className={styles.footer_link}>Политика конфиденциальности</Link>
                    <Link className={styles.footer_link}>Рекламодателям и партнерам</Link>
                    <Link className={styles.footer_link}>Контакты</Link>
                </div>
                <div className={styles.link_content}>
                    <Link className={styles.footer_link}>О проекте</Link>
                    <Link className={styles.footer_link}>Банки и МФО</Link>
                </div>
            </div>
        </div>
    </section>
}
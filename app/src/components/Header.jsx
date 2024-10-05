import styles from './header.module.css'
import { Link } from 'react-router-dom';
import Modal from "../components/Modal/Modal";
import { createPortal } from 'react-dom';
import { useState } from "react";

export default function Header() {

    const [openModal, setOpenModal] = useState(false)

    return <header className={styles.header}>
        <div className={styles.header_container}>
            <img src="./images/media/menu.png" alt="img" className={styles.menu_icon}/>
            <Link to="/"><img src="./images/header/logo.svg" alt="logo" /></Link>
            <div className={styles.header_container_info}>
                <p className={styles.header_phone}>8 (912) 364-52-53 </p>
            <div className={styles.header_container_login} onClick={() => {}}>
                <p className={styles.header_text}>ВОЙТИ</p>
                <img src="./images/header/LogIn.png" className={styles.header_login} alt="login" />
            </div> 
            </div>
        </div>
        <hr className={styles.header_line}/>
        <nav className={styles.header_nav}>
            <Link className={styles.nav_paragraph}>Услуги</Link>
            <Link className={styles.nav_paragraph}>Финансовые продукты</Link>
            <Link className={styles.nav_paragraph}>Юридическая помощь</Link>
            <Link className={styles.nav_paragraph}>Статьи</Link>
            <Link className={styles.nav_paragraph}>О проекте</Link>
        </nav>
        {openModal && createPortal(<Modal open={setOpenModal}  />, document.body)}
    </header>
}
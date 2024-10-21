import styles from './header.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Modal from "../components/Modal/Modal";
import { createPortal } from 'react-dom';
import { useState } from "react";

export default function Header() {

    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()

    function handleSelect(e) {
        navigate(e.target.value)
    }

    return <header className={styles.header}>
        <div className={styles.header_container}>
            <img src="./images/media/menu.png" alt="img" className={styles.menu_icon}/>
            <Link to="/"><img src="./images/header/logo.svg" className={styles.logo} alt="logo" /></Link>
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
            <select onChange={handleSelect} className={styles.header_select}>
                <option value="/" className={styles.nav_paragraph}>Услуги</option>
                <option value="/borrow" className={styles.nav_paragraph}>Займ</option>
                <option value="/refinance" className={styles.nav_paragraph}>Рефинансирование</option>
                <option value="/buncrutcy" className={styles.nav_paragraph}>Банкротство</option>
                <option value="/debts" className={styles.nav_paragraph}>Возврат долгов</option>
            </select>
            <Link className={styles.nav_paragraph}>Финансовые продукты</Link>
            <Link className={styles.nav_paragraph}>Юридическая помощь</Link>
            <Link className={styles.nav_paragraph}>Статьи</Link>
            <Link className={styles.nav_paragraph}>О проекте</Link>
        </nav>
        {openModal && createPortal(<Modal open={setOpenModal}  />, document.body)}
    </header>
}
import styles from './scheme.module.css'

export default function Scheme() {
    return <section className={styles.scheme}>
        <div className={styles.scheme_container}>
            <div className={styles.scheme_content}>
                <div className={styles.container_info}>
                    <h3 className={styles.scheme_header}>Схема получения наших услуг  </h3>
                    <p className={styles.scheme_text}>UFEx.pro — это первый сайт, на котором вы получите необходимую сумму 
                        на самых выгодных условиях только от проверенных организаций и частных инвесторов 
                        на Торгах по «Голландской системе» или создав готовое предложение на которое могут 
                        откликнуться для предоставления займа.</p>
                    <p className={styles.scheme_text}>«Голландская система торгов» (англ. Dutch auction) – система, при которой ставка по услуге 
                        предоставляется на понижение процентной ставки по запрашиваемой услуге. Покупатель, который 
                        предоставил наименьшую и последнюю процентную ставку в зависимости от временного типа торгов 
                        объявляется Победителем.</p>
                </div>
            </div>
            <div className={styles.container_boxes}>
                <div className={styles.ordinary_box_media}>
                        <h3 className={styles.header_box}>1 шаг</h3>
                        <h3 className={styles.header_box}>Регистрация на сайте</h3>
                        <p className={styles.text_box}>Создайте личный кабинет, указав электронную почту и номер телефона</p>
                    </div>
                    <div className={styles.ordinary_box_media}>
                        <h3 className={styles.header_box}>2 шаг</h3>
                        <h3 className={styles.header_box}>Заполние анкеты</h3>
                        <p className={styles.text_box}>Внесите необходимые данные в анкету, отправьте ее на торги или 
                            создайте готовое предложение и отправьте организациям: 
                            частный инвестор, кредитный брокер, ломбард</p>
                    </div>
                <div className={styles.box}>
                    <div className={styles.box_item}>
                        <h3 className={styles.header_box}>1 шаг</h3>
                        <h3 className={styles.header_box}>Регистрация на сайте</h3>
                        <p className={styles.text_box}>Создайте личный кабинет, указав электронную почту и номер телефона</p>
                    </div>
                    <div className={styles.box_item}>
                        <h3 className={styles.header_box}>2 шаг</h3>
                        <h3 className={styles.header_box}>Заполние анкеты</h3>
                        <p className={styles.text_box}>Внесите необходимые данные в анкету, отправьте ее на торги или 
                            создайте готовое предложение и отправьте организациям: 
                            частный инвестор, кредитный брокер, ломбард</p>
                    </div>
                </div>
                <div className={styles.ordinary_box}>
                        <h3 className={styles.header_box}>3 шаг</h3>
                        <h3 className={styles.header_box}>Торги/Создание готовых предложений</h3>
                        <p className={styles.text_box}>За вашу анкету (Лот) пройдут торги на понижение процентной ставки и 
                            предоставление лучших условий для получения займа. При Готовых предложений 
                            вы создаете готовое предложение, на которое откликается соответствующая организация: 
                            частный инвестор, кредитный брокер, ломбард.</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_item}>
                        <h3 className={styles.header_box}>4 шаг</h3>
                        <h3 className={styles.header_box}>Обмен информацией по результатам торгов</h3>
                        <p className={styles.text_box}>Обменяйтесь данными с кредитной организацией, частным инвестором или ломбардом и заключите договор займа.</p>
                    </div>
                    <div className={styles.box_item}>
                        <h3 className={styles.header_box}>5 шаг</h3>
                        <h3 className={styles.header_box}>Получение займа</h3>
                        <p className={styles.text_box}>Получите деньги на самых выгодных для вас условиях.</p>
                    </div>
                </div>
                <div className={styles.ordinary_box_media}>
                        <h3 className={styles.header_box}>4 шаг</h3>
                        <h3 className={styles.header_box}>Обмен информацией по результатам торгов</h3>
                        <p className={styles.text_box}>Обменяйтесь данными с кредитной организацией, частным инвестором или ломбардом и заключите договор займа.</p>
                    </div>
                    <div className={styles.ordinary_box_media}>
                        <h3 className={styles.header_box}>5 шаг</h3>
                        <h3 className={styles.header_box}>Получение займа</h3>
                        <p className={styles.text_box}>Получите деньги на самых выгодных для вас условиях.</p>
                    </div>
            </div>
            <div className={styles.pagination}>
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
                <img src="./images/media/pagination1.png" alt="img" />
            </div>
        </div>
    </section>
}

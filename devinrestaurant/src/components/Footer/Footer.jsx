import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div>

                    <p>Florianópolis - SC</p>
                    <p>Rua das Delícias, nº 505</p>

                </div>
                <div>
                    <ul className={styles.ul}>
                        <li>
                            <a href=""><img src="/instagram.png" width={'30px'} alt="instagram logo" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/twitter.png" width={'30px'} alt=" twitter logo" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/linkedin.png" width={'30px'} alt="linkedin logo" /></a>
                        </li>
                    </ul>
                    <p>© DEVinRestaurant - 2022</p>
                </div>
                <div>

                    <p>Terça a Quinta: das 19hrs às 23hrs</p>
                    <p>Sxta a Domingo: das 18hrs às 24hrs</p>

                </div>
            </div>
        </footer>
    )
}
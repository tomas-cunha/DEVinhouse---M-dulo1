import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div>
                    {/* <h3>Endereço:</h3> */}
                    <div>
                        <p>Florianópolis - SC</p>
                        <p>Rua das Delícias, nº 505</p>
                    </div>
                </div>
                <div>
                    {/* <h3 className={styles.subtitulo}>Siga a gente:</h3> */}
                    <ul className={styles.ul}>
                        <li>
                            <a href=""><img src="/instagram.png" width={'30px'} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/twitter.png" width={'30px'} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img src="/linkedin.png" width={'30px'} alt="" /></a>
                        </li>
                    </ul>
                    <p>© DEVinRestaurant - 2022</p>
                </div>
                <div>
                    {/* <h3>Horário de funcionamento:</h3> */}
                    <div>
                        <p>Terça a Quinta: das 19hrs às 23hrs</p>
                        <p>Sxta a Domingo: das 18hrs às 24hrs</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
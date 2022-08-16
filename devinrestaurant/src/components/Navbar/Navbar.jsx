import styles from './Navbar.module.css'


export const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.decor}></div>
            <div className={styles.container}>
                <img src="/logo.png" alt="" className={styles.logo} />
                <h1 className={styles.title}>DEVinRestaurant</h1>
            </div>
            <nav><a href="#" className={styles.menu}>Cardápio</a></nav>
            <div className={styles.decor}></div>
        </header>
    )


}
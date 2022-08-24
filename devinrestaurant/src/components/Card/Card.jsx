import styles from './Card.module.css';
import PropType from 'prop-types';

export const Card = ({ nome, imagem, descricao, preco, tempo }) => {
    return (
        <li className={styles.card}>
            <h3 className={styles.titulo}>{nome}</h3>
            <img src={imagem} alt={nome} className={styles.img} />
            <p className={styles.descricao}>{descricao}</p>
            <div className={styles.cardBottom}>
                <div className={styles.info}>
                    <img src="/dollar.png" alt="" className={styles.logo} />
                    <p>{preco},00</p>
                </div>
                <div className={styles.info}>
                    <img src="/clock.png" alt="" className={styles.logo} />
                    <p>{tempo} min</p>
                </div>

            </div>
        </li>
    )
}

Card.propTypes = {
    nome: PropType.string.isRequired,
    imagem: PropType.string.isRequired,
    descricao: PropType.string.isRequired,
    preco: PropType.number.isRequired,
    tempo: PropType.number.isRequired
};
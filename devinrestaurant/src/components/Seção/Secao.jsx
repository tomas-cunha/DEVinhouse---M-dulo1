import { Card } from '../Card/Card';
import styles from './Secao.module.css';
import PropType from 'prop-types';

export const Secao = ({ titulo, array }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <ul className={styles.ul}>
                {array.map((p, idx) => (
                    <Card key={idx} nome={p.nome} imagem={p.imagem} descricao={p.descricao} preco={p.preco} tempo={p.tempo} />
                ))}
            </ul>
        </section>
    )
}

Secao.propTypes = {
    titulo: PropType.string.isRequired,
    array: PropType.array.isRequired

}
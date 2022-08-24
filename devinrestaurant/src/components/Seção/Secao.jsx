import { Card } from '../Card/Card';
import styles from './Secao.module.css';
import PropType from 'prop-types';
import { Fragment } from 'react';

export const Secao = ({ titulo, itens, subsecao }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.titulo}>{titulo}</h2>

            {subsecao?.length > 0 ? (subsecao.map((sub, idx) => {
                return (
                    <Fragment key={idx}>
                        <h2 className={styles.subtitulo}>{sub}</h2>
                        <ul className={styles.ul}>
                            {itens
                                .filter((prato) => prato.subsecao === sub)
                                .map((item, idx) => (

                                    <Card key={idx} nome={item.nome} imagem={item.imagem} descricao={item.descricao} preco={item.preco} tempo={item.tempo} />

                                ))}
                        </ul>
                    </Fragment>
                )
            })
            ) : (
                <ul className={styles.ul}>
                    {itens.map((p, idx) => (

                        <Card key={idx} nome={p.nome} imagem={p.imagem} descricao={p.descricao} preco={p.preco} tempo={p.tempo} />

                    ))}
                </ul>
            )}


        </section>
    )
}

Secao.propTypes = {
    titulo: PropType.string.isRequired,
    itens: PropType.array.isRequired,
    subsecao: PropType.arrayOf(PropType.string)
}
import { saudacao } from "./saudacao.mjs"
import saudacaoEspecial from "./saudacaoespecial.mjs";


document.querySelector('body').onload = alert(saudacao());
document.querySelector('body').onload = alert(saudacaoEspecial('Tomás'));

//exercício 03

class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

const shampoo = new Produto('pantene', 100, 5000, 2);

console.log(shampoo);


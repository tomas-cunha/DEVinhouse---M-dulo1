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

class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
    };

    adicionaProduto(produto) {
        if (produto instanceof Produto) {
            this.listaProdutos.push(produto);
        }
    };

    calcularTotal() {
        let total = 0;
        this.listaProdutos.forEach((p) => total += p.preco * p.quantidade);
        return total;
    }
}


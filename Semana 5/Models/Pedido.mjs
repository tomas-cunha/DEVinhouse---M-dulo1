import { Produto } from "./Produto.mjs";

export class Pedido {
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
};
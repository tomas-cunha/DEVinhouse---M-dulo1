import { saudacao } from "./saudacao.mjs"
import saudacaoEspecial from "./saudacaoespecial.mjs";
import { Produto } from "./Models/Produto.mjs";
import { Pedido } from "./Models/Pedido.mjs";
import { elementPedido } from "./dom.mjs"


document.querySelector('body').onload = alert(saudacao());
document.querySelector('body').onload = alert(saudacaoEspecial('Tomás'));

const prod1 = new Produto('Smirnoff', 30, true, 50);
const prod2 = new Produto('Orloff', 20, true, 30);
const prod3 = new Produto('Natasha', 15, true, 20);
const prod4 = new Produto('Absolut', 70, true, 20);
const prod5 = new Produto('Balalaika', 12, true, 40);

const pedido1 = new Pedido("20220001", 'Tomás');
const pedido2 = new Pedido("20220002", 'Paula');

pedido1.adicionaProduto(prod1);
pedido1.adicionaProduto(prod2);
pedido1.adicionaProduto(prod5);

pedido2.adicionaProduto(prod3);
pedido2.adicionaProduto(prod4);

const pedidos = [pedido1, pedido2];
const pedidosEl = document.getElementById("pedidos");

pedidos.forEach((pedido) => {
    pedidosEl.appendChild(elementPedido(pedido));
});


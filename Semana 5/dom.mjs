function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};

function elementProduto(produto) {
    const listItemEl = document.createElement("li");
    listItemEl.innerText = `${produto.nome} - ${produto.quantidade
        } - ${formatCurrency(produto.preco)}`;

    return listItemEl;
}

function printProds(list) {

    const labelEl = document.createElement("label");
    labelEl.htmlFor = "produtos";
    labelEl.innerText = "Produtos";

    const listEl = document.createElement("ul");
    listEl.name = "produtos";

    list.forEach((prod) => {
        listEl.appendChild(elementProduto(prod));
    });

    return [labelEl, listEl];
}

export function elementPedido(pedido) {
    const el = document.createElement("li");
    el.innerHTML = `
      <p>PEDIDO No. ${pedido.numeroPedido}</p>
      <p>Data: ${pedido.dataPedido}</p>
      <p>Cliente: ${pedido.nomeCliente}</p>
      <p>Total: ${formatCurrency(pedido.calcularTotal())}</p>
      <p>Está pago?: ${pedido.estaPago ? "Sim" : "Não"}</p>
    `;

    const [label, lista] = printProds(pedido.listaProdutos);

    el.appendChild(label);
    el.appendChild(lista);
    return el;
}
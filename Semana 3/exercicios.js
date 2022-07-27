//exercicio01
var listaNumeros = [2, 3, 9, 12, 16, 55, 90, 78, 17]


listaNumeros.forEach((number, indice) => {
    listaNumeros[indice] = number * 2;
})

console.log(listaNumeros);

//exercicio02
var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
];

let listaEl = document.getElementById('nomes');
listaConvidados.forEach((pessoa) => {
    let itemLista = document.createElement('li');
    itemLista.textContent = `${pessoa.nome} ${pessoa.sobrenome}`;
    listaEl.appendChild(itemLista);
})
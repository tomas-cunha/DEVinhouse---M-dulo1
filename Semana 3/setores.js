//exercicio04
const convidado1 = {
    nome: 'Tomás',
    sobrenome: 'Cunha',
    setor: 'camarote',
    idade: 26,
};

const convidado2 = {
    nome: 'Paula',
    sobrenome: 'Salum',
    setor: 'camarote',
    idade: 27,
};

const convidado3 = {
    nome: 'Mário',
    sobrenome: 'Cherubini',
    setor: 'pista',
    idade: 27,
};

const convidado4 = {
    nome: 'Klaus',
    sobrenome: 'Rocha',
    setor: 'pista',
    idade: 17,
};

const convidado5 = {
    nome: 'Marcos',
    sobrenome: 'Correa',
    setor: 'arquibancada',
    idade: 16,
};

const convidado6 = {
    nome: 'Ana',
    sobrenome: 'Silva',
    setor: 'arquibancada',
    idade: 30,
};

//exercicio05

let listaDeConvidados = [
    convidado1,
    convidado2,
    convidado3,
    convidado4,
    convidado5,
    convidado6,
];

//exercicio06

function liberarBebidas(lista) {
    var listaAtualizada = [];
    for (i = 0; i < lista.length; i++) {
        var convidado = lista[i];
        if (convidado.idade >= 18) {
            convidado.openBar = true;
        } else {
            convidado.openBar = false;
        }
        listaAtualizada.push(convidado);
    }
    return listaAtualizada;
};

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

//exercicio07

function separarCamarote(array) {
    return array.filter((pessoa) => pessoa.setor === "camarote");
};

let listaCamarote = separarCamarote(convidadosComBebidasProcessada);

function separarPista(array) {
    return listaFiltrada = array.filter((pessoa) => pessoa.setor === "pista");
};

let listaPista = separarPista(convidadosComBebidasProcessada)

function separarArquibancada(array) {
    return listaFiltrada = array.filter((pessoa) => pessoa.setor === "arquibancada");
};

let listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);

//exercicio08

let listaCamaroteEl = document.getElementById('listaCamarote');
let listaArquibancadaEl = document.getElementById('listaArquibancada');
let listaPistaEl = document.getElementById('listaPista');

// listaCamarote.forEach((c) => {
//     var item = document.createElement('li');
//     item.textContent = `${c.nome} ${c.sobrenome}`;
//     listaCamaroteEl.appendChild(item)
// })

const montaNome = (objPessoa) => {
    return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};

const marcarOpenbar = (convidado) => {
    return convidado.openBar ? "🍹" : " "
}

listaCamarote.forEach((convidado) => {
    listaCamaroteEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenbar(convidado)}</li>`;
})

listaArquibancada.forEach((convidado) => {
    listaArquibancadaEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenbar(convidado)}</li>`;
})

listaPista.forEach((convidado) => {
    listaPistaEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenbar(convidado)}</li>`;
})
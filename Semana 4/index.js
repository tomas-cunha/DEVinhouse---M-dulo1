let contasClientes = [
    {
        id: 1,
        nome: 'Cliente 01',
        saldo: 500,
        senha: '1111'
    },
    {
        id: 2,
        nome: 'Cliente 02',
        saldo: 3000,
        senha: '2222'
    },
    {
        id: 3,
        nome: 'Cliente 03',
        saldo: 5000,
        senha: '1234'
    },
];

const contas = document.getElementById('conta');
const strongMensagem = document.getElementById('mensagem');
const form = document.getElementById('form');
const body = document.body;


const adicionaOpcao = (value, text) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    option.id = value;
    contas.appendChild(option)
};

const populaSelect = () => {
    contas.innerHTML = " "

    adicionaOpcao('0', '(Selecione)')

    contasClientes.forEach((conta) => {
        adicionaOpcao(conta.id, conta.nome)
    })
};

body.onload = populaSelect;

const exibeMensagem = (mensagem, type = 'error') => {
    strongMensagem.textContent = mensagem;

    strongMensagem.className = type === 'error' ? 'error' : 'success';
};

const validaValor = (valor) => {
    if (isNaN(valor) || valor <= 0) {
        exibeMensagem('Valor inválido');
        return false;
    }
    return true;
}

const atualizaSaldo = (contaAtual, saldo) => {
    const contasSemContaAtual = contasClientes.filter((c) => c.id !== contaAtual.id);
    const contasAtualizadas = [...contasSemContaAtual, { ...contaAtual, saldo }];
    contasClientes = contasAtualizadas;
}

const sacar = (contaAtual, valor) => {
    if (!validaValor(valor)) {
        return;
    }

    if (valor > contaAtual.saldo) {
        exibeMensagem(`Saldo insuficiente. Saldo atual: ${contaAtual.saldo}`);
        return;
    }

    const novoSaldo = contaAtual.saldo - valor;

    atualizaSaldo(contaAtual, novoSaldo);

    exibeMensagem(`Saque efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success')
}

const depositar = (contaAtual, valor) => {
    if (!validaValor(valor)) {
        return;
    }

    const novoSaldo = contaAtual.saldo + valor;

    atualizaSaldo(contaAtual, novoSaldo);

    exibeMensagem(`Depósito efetuado com sucesso! Saldo atual: ${novoSaldo}`, 'success')
}

const operacoes = (event) => {
    event.preventDefault();

    const contaId = parseInt(event.target.conta.value);
    const valor = parseFloat(event.target.valor.value);
    const operacao = parseInt(event.target.operacao.value);
    const senha = event.target.senha.value;

    if (!validaValor(contaId) || !validaValor(valor) || !validaValor(operacao)) {
        return;
    }

    const contaAtual = contasClientes.find((conta) => conta.id === contaId);
    if (!contaAtual) {
        exibeMensagem('Conta inválida!');
    }

    if (!senha) {
        exibeMensagem('Informe a senha!');
        return;
    }

    if (senha !== contaAtual.senha) {
        event.target.senha.value = ''
        exibeMensagem('Senha incorreta!');
        return;
    }

    switch (operacao) {
        case 1:
            sacar(contaAtual, valor)
            break;
        case 2:
            depositar(contaAtual, valor)
            break;
        default:
            exibeMensagem('Operação inválida!')
    }

    console.log(contasClientes)
    // sacar(contasClientes[0], 200)
}

form.onsubmit = operacoes;
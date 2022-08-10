const parouImpar = () => {
    const num = document.getElementById('number').value;
    const resultado = document.getElementById('resultado-num');

    resultado.textContent = num % 2 === 0 ? 'É par' : 'É ímpar';
}

const verificar = document.getElementById('button-number');
verificar.addEventListener('click', parouImpar);

const exibeMensagem = (msg) => {
    const elemento = document.getElementById('resultado-age');
    elemento.innerText = msg;
}

const classificaIdade = () => {
    const idade = document.getElementById('age').value;


    if (idade <= 15) {
        exibeMensagem('Você é classificado como jovem!')
        return;
    }

    if (idade >= 65) {
        exibeMensagem('Você é considerado idoso!');
        return;
    }

    exibeMensagem('Você é considerado adulto!')
}

const classificar = document.getElementById('button-age');
classificar.addEventListener('click', classificaIdade);
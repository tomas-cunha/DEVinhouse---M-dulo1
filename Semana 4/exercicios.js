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

const data = document.getElementById('data');
const estacao = document.getElementById('estacao');
const imagem = document.getElementById('imagem');
const container = document.querySelector('.container-estacao')

const verificaEstacao = (event) => {
    const dataFormatada = new Date(`${event.target.value} 00:00`)
    const dia = dataFormatada.getDate();
    const mes = dataFormatada.getMonth() + 1;

    if ((mes === 3 && dia >= 22) || mes === 4 || mes === 5 || (mes === 6 && dia <= 21)) {
        estacao.textContent = 'Outono';
        container.style.backgroundColor = 'orange';
        imagem.src = './Assets/fall.jpg'
        return;
    }

    if ((mes === 6 && dia >= 22) || mes === 7 || mes === 8 || (mes === 9 && dia <= 21)) {
        estacao.textContent = 'Inverno';
        container.style.backgroundColor = 'lightblue';
        imagem.src = './Assets/winter.jpg'
        return;
    }

    if ((mes === 9 && dia >= 22) || mes === 10 || mes === 11 || (mes === 12 && dia <= 21)) {
        estacao.textContent = 'Primavera'
        container.style.backgroundColor = 'lightsalmon';
        imagem.src = './Assets/spring.jpg'
        return;
    }

    estacao.textContent = 'Verão'
    container.style.backgroundColor = 'red';
    imagem.src = './Assets/summer.jpg'


}

data.onchange = verificaEstacao;


// -- 22/03 a 21/06 - Outono;
// -- 22/06 a 21/09 - Inverno;
// -- 22/09 a 21/12 - Primavera.
// -- 22/12 a 21/03 - Verão; 
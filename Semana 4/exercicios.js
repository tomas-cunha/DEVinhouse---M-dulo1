const parouImpar = () => {
    const num = document.getElementById('number').value;
    const resultado = document.getElementById('resultado-num');

    resultado.textContent = num % 2 === 0 ? 'É par' : 'É ímpar';
}

const verificar = document.getElementById('button-number');
verificar.addEventListener('click', parouImpar);
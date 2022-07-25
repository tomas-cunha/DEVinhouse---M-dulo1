function calculaAno() {
    var ano = prompt('Informe um ano')
    var anoAtual = new Date().getFullYear();
    var resultado = ano - parseInt(anoAtual);
    alert('O resultado é: ' + resultado);
}

var result = document.getElementById('resultado')
var valor = parseInt(result.textContent);

function incrementa() {
    valor++;
    result.innerText = valor;
}

function decrementa() {
    valor--;
    result.innerText = valor;
}
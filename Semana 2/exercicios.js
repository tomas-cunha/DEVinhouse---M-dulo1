function calculaAno() {
    var ano = prompt('Informe um ano')
    var anoAtual = new Date().getFullYear();
    var resultado = ano - parseInt(anoAtual);
    alert('O resultado é: ' + resultado);
}
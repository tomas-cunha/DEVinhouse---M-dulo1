var listaNumeros = [2, 3, 9, 12, 16, 55, 90, 78, 17]


listaNumeros.forEach((number, indice) => {
    listaNumeros[indice] = number * 2;
})

console.log(listaNumeros);

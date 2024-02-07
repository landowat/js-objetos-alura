const clientes = require("./cliente.json");

// Função que busca valor dentro de chave da lista
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave] === valor)
}

// Função que busca valor dentro de chave da lista, onde também consegue encontrar valor quando chave for lista
function encontrar_v2(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const busca1 = encontrar(clientes, "nome", "Flori")

const busca2 = encontrar_v2(clientes, "telefone", "3569848931")

console.log(busca1)

console.log(busca2)

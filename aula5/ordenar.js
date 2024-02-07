const clientes = require("./cliente.json");

function ordenarLista(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a,b) => {
        if( a[propriedade] < b[propriedade] ) {
            return -1;
        }
        if( a[propriedade] > b[propriedade] ) {
            return 1;
        }
        return 0;
    });

    if(ordem !== "crescente") {
        return resultado.reverse();
    }

    return resultado;
}

const listaOrdenada = ordenarLista(clientes, "nome", "desc");

console.log(listaOrdenada)
function recebeDados(lista, numero){
    const exists = !(!lista || !numero);
    const isArray = (typeof(lista)==='object');
    const isNumber = (typeof(numero)==='number');

    if(!exists) throw ReferenceError('Falta passar parâmetros');
    if(!isArray) throw TypeError('O array é inválido');
    if(!isNumber) throw TypeError('O valor passado para "numero" não é um número');

    const isEqual = (lista.length === numero);

    if(!isEqual) throw RangeError('O tamanho do array não é igual ao número passado');
}

function testeDados(lista, numero){
    try{
        recebeDados(lista, numero);
    } catch(e) {
        console.log(e);
    }
}

testeDados()
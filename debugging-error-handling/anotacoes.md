# Anotações

## Error no ECMAScript

um erro em tempo de execução. É composto por:

- Mensagem;
- Nome;
- Linha;
- Call Stack;

## DOMException

Erros associados à estrutura do DOM.

## Tratar erros

### Throw

Quando utiliza `throw`, ele retorna um resultado de erro caso entre neste comando. Ele é utilizado nas funções no lugar do `return`.

```javascript
function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');
```

### Try/Catch

Modelo mais avançado para tratar erros.

O Try...catch é um modelo que avalia um bloco de código no `try`, caso o erro seja identificado o `catch` manipula o erro.

```javascript
function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
}

verificaPalindromo('cat');
```

### Finally

num bloco try...catch, pode ser utilizada a `finally`, que executa uma função independente das verificações.

```javascript
function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        throw e;
    }
    finally{
        console.log('A string enviada foi: ' + string);
    }
}

verificaPalindromo('cat');
```

## Objeto Error

O objeto Error tem como finalidade montar um objeto de erro para lançar ao ser identificado.

```javascript
new Error(message, fileName, lineNumber)

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;
```
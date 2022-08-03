import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique a existência do form')
}

const botaoImporta = <HTMLInputElement>document.querySelector('#botao-importa')
if(botaoImporta){
    botaoImporta.addEventListener('click', ()=>{
        controller.importaDados();
    });
}else{
    throw Error('Botão importa não foi encontrado');
}
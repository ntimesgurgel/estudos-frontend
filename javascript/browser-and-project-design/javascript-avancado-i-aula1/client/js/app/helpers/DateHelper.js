class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instaciado');
    }

    static textoParaData(texto){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){
            throw new Error('Deve estar no formato AAAA-MM-DD')
        }
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
};
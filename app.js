let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
} 

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*function saludo() {
    console.log('Ola!');
}

saludo();

function saludoNombre(nombre) {
    console.log(`Ola ${nombre}`);
}

saludoNombre('Emanuel');

function numeroMultiplicado(numero) {
    return numero * 2;
    
}

let resultado = numeroMultiplicado(4)
console.log(resultado);

function mediaNumero(a, b, c) {
    return (a + b + c) / 3;
}

let resultadoMedia = mediaNumero(3, 4, 4);
console.log(resultadoMedia);

function numeroMayor(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let encontrarNumero = numeroMayor(15, 18);
console.log (encontrarNumero);

function numeroPorNumero(numerito) {
    return numerito * numerito;
}

let multiplicacion = numeroPorNumero(6);
console.log(multiplicacion); */


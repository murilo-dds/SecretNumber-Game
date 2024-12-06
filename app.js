let ListaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e '+numeroMaximo );
}

exibirMensagemInicial()

function verificarChute(){

    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' :'tentativa';
        let mensagemDeTentativas = ('Você descobriu o número secreto em ' +tentativas +' '  + palavraTentativa);
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p',mensagemDeTentativas );

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
    let tamanhoDaLista = ListaDeNumerosSorteados.length;
    let numeroSorteado =  parseInt(Math.random() * numeroMaximo + 1);
    if (tamanhoDaLista == numeroMaximo){
        ListaDeNumerosSorteados = [];
    }
    if (ListaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else {
        ListaDeNumerosSorteados.push(numeroSorteado);
        console.log(ListaDeNumerosSorteados);
        return numeroSorteado;
        
}
}
function limparCampo(){
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 1;
}
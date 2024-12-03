// DEFINE AS CONSTANTES DOS BOTÕES 
const btn1x1 = window.document.getElementById("btn1x1");
const btn1x2 = window.document.getElementById("btn1x2");
const btn1x3 = window.document.getElementById("btn1x3");
const btn2x1 = window.document.getElementById("btn2x1");
const btn2x2 = window.document.getElementById("btn2x2");
const btn2x3 = window.document.getElementById("btn2x3");
const btn3x1 = window.document.getElementById("btn3x1");
const btn3x2 = window.document.getElementById("btn3x2");
const btn3x3 = window.document.getElementById("btn3x3");

const btn = window.document.getElementsByTagName("button");

// DEFINE A CONSTANTE PARA PODER ALTERAR O CONTEÚDO DE H2 POSTERIORMENTE
const vez = window.document.getElementById("vez");

//CRIA VARIÁVEL PARA ARMAZENAR A VEZ DE CADA JOGADOR
let clicks = 0;

// CRIA VARIÁVEL PARA ARMAZENAR A QUANTIDADE DE ESPAÇOS VAZIOS
let vazio = 9;

// ARMAZENA AS CLASSES NA VARIÁVEL textBtn
let textoBtn = window.document.getElementsByClassName("btn");

// INICIA O JOGO COM A VARIÁVEL JOGADOR = X
let jogador = "X";

let clicksBtn = 0;


//FUNÇÃO QUE VERIFICA QUEM É O JOGADOR DA VEZ E ALTERA O CONTEÚDO DE H2
function jogadorDaVez(){
    if(clicks % 2 == 0){
        vez.textContent = "JOGADOR DA VEZ: X";
    
    }else{
        vez.textContent = "JOGADOR DA VEZ: O";
 
    }
}

// FUNÇÃO PARA INICIAR O JOGO E PREENCHER OS ESPAÇOS
function jogo(){

    /* ABAIXO: QUANDO OS BOTÕES ABAIXO FOREM CLICADOS,  PRIMEIRO É VERIFICADO SE O CONTEÚDO DO BOTÃO 
    ESTÁ VAZIO, CASO ESTEJA, VERIFICA QUEM É O JOGADOR DA VEZ E PREENCHE O BOTÃO COM O SÍMBOLO DO JOGADOR */
    btn1x1.onclick = function(){
        clicks++;
        if(btn1x1.textContent == ""){
            btn1x1.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    }
    
    btn1x2.onclick = function(){
        clicks++;
        if(btn1x2.textContent == ""){
            btn1x2.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");

        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    
    }
    
    btn1x3.onclick = function(){
        clicks++;
        if(btn1x3.textContent == ""){
            btn1x3.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    
    }
    
    btn2x1.onclick = function(){
        clicks++;
        if(btn2x1.textContent == ""){
            btn2x1.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    
    }
    
    btn2x2.onclick = function(){
        clicks++;
        if(btn2x2.textContent == ""){
            btn2x2.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    }
    
    btn2x3.onclick = function(){
        clicks++;
        if(btn2x3.textContent == ""){
            btn2x3.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
       
    }
    
    btn3x1.onclick = function(){
        clicks++;
        if(btn3x1.textContent == ""){
            btn3x1.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
        
    }
    
    btn3x2.onclick = function(){
        clicks++;    
        if(btn3x2.textContent == ""){
            btn3x2.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    }
    
    btn3x3.onclick = function(){
        clicks++;
        if(btn3x3.textContent == ""){
            btn3x3.textContent = jogador;
            if(jogador == "X"){
                jogador = "O";
            }else{
                jogador = "X";
            }
            vazio--;
            jogadorDaVez();
        }
        if (verificarVencedor()) {
            vez.textContent = `Jogador ${verificarVencedor()} venceu!`;
            setTimeout(() => {
                reiniciar();
            }, "1000");
        } else if (vazio === 0) {
            vez.textContent = "EMPATE";
            setTimeout(() => {
                reiniciar();
            }, "1000");
        }
    }    
}

// FUNÇÃO PARA REINICIAR O JOGO AO CLICAR NO BOTÃO "REINICIAR"
function reiniciar(){
    window.location.reload();
}


/*FUNÇÃO PARA ALLTERAR O FUNDO USANDO "DOM", AO CLICAR NO BOTÃO, ALTERA A IMAGEM DE FUNDO DO JOGO, DE ACORDO 
COM A QUANTIDADE DE CLIQUES.*/
function alterarFundo(){
    clicksBtn++; // VARIÁVEL PARA ARMAZENAR A QUANTIDADE DE CLIQUES NO BOTÃO 

    switch(clicksBtn){
        case 1:
            document.body.style.backgroundImage = 'url(/img/fundo2.jpg)';
            break;
        case 2:
            document.body.style.backgroundImage = 'url(/img/fundo3.jpg)';
            break;
        case 3:
            document.body.style.backgroundImage = 'url(/img/fundo4.jpg)';
            break;
        case 4:
            document.body.style.backgroundImage = 'url(/img/fundo5.jpg)';
            break;
        case 5:
            document.body.style.backgroundImage = 'url(/img/fundo6.png)';
            break;
        case 6:
            document.body.style.backgroundImage = 'url(/img/fundo7.jpg)';
            break;
        case 7:
            document.body.style.backgroundImage = 'url(/img/fundo8.jpg)';
            break;
        /* DEFAULT: CASO A QUANTIDADE DE CLIQUES TENHA ULTRAPASSADO A QUANTIDADE DE IMAGENS, 
        A VARIÁVEL "CLICKSBTN" É ZERADA, PARA PODER CONTINUAR MUDANDO A IMAGEM*/
        default:
            clicksBtn = 0;
    }
}

// FUNÇÃO PARA VEIRIFICAR SE HÁ UM JOGADOR
function verificarVencedor() {
    // COMBINAÇÕES POSSÍVEIS PARA A VITÓRIA DOS JOGADORES
    const combinacoesVitoria = [
        // LINHAS
        ["btn1x1", "btn1x2", "btn1x3"],
        ["btn2x1", "btn2x2", "btn2x3"],
        ["btn3x1", "btn3x2", "btn3x3"],
        // COLUNAS
        ["btn1x1", "btn2x1", "btn3x1"],
        ["btn1x2", "btn2x2", "btn3x2"],
        ["btn1x3", "btn2x3", "btn3x3"],
        // DIAGONAIS
        ["btn1x1", "btn2x2", "btn3x3"],
        ["btn1x3", "btn2x2", "btn3x1"]
    ];

    // LAÇO PARA ARMAZENAR O CONTEÚDO DOS BOTÕES NAS CONSTANTES
    for (const combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        const btnA = document.getElementById(a).textContent;
        const btnB = document.getElementById(b).textContent;
        const btnC = document.getElementById(c).textContent;

        // VERIFICA SE OS BOTÕES TÊM O MESMO CONTEÚDO E NÃO ESTÃO VAZIOS
        if (btnA !== "" && btnA === btnB && btnB === btnC) {
            return btnA; //RETORNA O VENCEDOR
        }
    }
    // CASO SEJA EMPATE
    return null;
}



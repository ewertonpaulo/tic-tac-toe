const player1 = "Bolsonaro";
const player2 = "Lula";
var turn = player1;
var contador = 0;
var gameOver = false;

refreshMostrador();
starter();
function empate(contador) {
    if (contador == 9) {
        var empate = document.getElementById('mostra')
        empate.innerHTML = "Jogo empatado!"
        setTimeout(function(){
            empate.innerHTML = ""
        },2000)
        return gameOver = true
    }
}

function refreshMostrador() {
    if (gameOver) {
        console.log("gameOver")
        return;
    }
    if (turn == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/Bolsomito.png");
    }
    else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/lula.png");
    }
}

function reset() {
    gameOver = false;
    turn = player1;
    refreshMostrador();
    var box = document.getElementsByClassName('box');
    var img = document.getElementsByClassName('imgbox');
    for (let i = 0; i < 9; i++) {
        box[i].setAttribute("played", "");
        img[i].setAttribute("src", "");
    }
}

function starter() {
    var boxs = document.getElementsByClassName("box");
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", function () {
            if (gameOver) {
                console.log("gameOver")
                return;
            };
            if (this.getElementsByTagName('img')) {

                if (this.childNodes[0].getAttribute("src") == "") {
                    if (turn == player1) {
                        console.log(this.childNodes[0]);
                        this.childNodes[0].setAttribute("src", "img/Bolsomito.png");
                        this.setAttribute("played", player1);
                        turn = player2;
                        soundBolsonaroPlay()
                        contador++
                        console.log(contador)
                    }
                    else {
                        this.childNodes[0].setAttribute("src", "img/lula.png");
                        this.setAttribute("played", player2);
                        turn = player1;
                        soundLulaPlay()
                        contador++
                    }
                    refreshMostrador();
                    verificaVencedor();
                    empate(contador)
                }
            }
        })
    }
}
function verificaVencedor() {
    const win = [
        ['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'], ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'],
        ['a1', 'b2', 'c3'], ['a3', 'b2', 'c1']
    ];
    var pos = {
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: ''
    };
    for (p in pos) {
        pos[p] = document.getElementById(p).getAttribute("played");
    }
    for (i in win) {
        if (pos[win[i][0]] != '' && (pos[win[i][0]] == pos[win[i][1]] && pos[win[i][1]] == pos[win[i][2]])) { winner(pos[win[i][0]]); setTimeout(function(){reset();},1500) }
    }
}

function soundBolsonaroPlay() {
    var array = [
        "audio/temQueSeFuderBolsonaro.mp3",
        "audio/chora agora e da q te dou outra.mp3",
        "audio/DaQueEuTeDouOutra.mp3"
    ];
    play(array)
}

function soundLulaPlay() {
    var array = [
        "audio/pipinha.mp3",
        "audio/souAnalfabeto.mp3",
        "audio/honesto.mp3"
    ];
    play(array)
}

function winner(winner) {
    var ganha = document.getElementById('mostra')
    ganha.innerHTML = "Ganhador é " + winner
    contador=0;
    setTimeout(function(){
        ganha.innerHTML = ""
    },2000)
    return gameOver = true
}

function play(array) {
    var randomItem = array[Math.floor(Math.random() * array.length)];
    var audio = new Audio();
    audio.src = randomItem;
    audio.loop = false;
    audio.play();
}

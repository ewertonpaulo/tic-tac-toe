const player1 = "Bolsonaro";
const player2 = "Lula";
var turn = player1;
var gameOver = false;

refreshMostrador();
starter();

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
        player.setAttribute("src", "img/lula.jpg");
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

            if (this.getElementsByTagName('img').length == 0) {
                if (turn == player1) {
                    console.log("jslajfsfs")
                    this.innerHTML = "<img src='img/bolsomito.png' border='0' height='90'>";
                    this.setAttribute("played", player1);
                    turn = player2;
                    soundBolsonaroPlay()
                }
                else {

                    this.innerHTML = "<img src='img/lula.jpg' border='0' height='90' widith='40'>";
                    this.setAttribute("played", player2);
                    turn = player1;
                    soundLulaPlay()
                }
                refreshMostrador();
                verificaVencedor();
            }
        })

    }
}

function verificaVencedor() {
    var pos = {
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: ''
    };

    for (p in pos) {
        pos[p] = document.getElementById(p).getAttribute("played");
    }

    if (((pos['a1'] == pos['b1'] && pos['b1'] == pos['c1']) ||
        (pos['a1'] == pos['a2'] && pos['a2'] == pos['a3']) ||
        (pos['a1'] == pos['b2'] && pos['b2'] == pos['c3'])) && (pos['a1'] != '')
    ) {
        winner(pos['a1'])
    }
    else if (((pos['b2'] == pos['b1'] && pos['b2'] == pos['b3']) ||
        (pos['b2'] == pos['a3'] && pos['a3'] == pos['c1']) ||
        (pos['b2'] == pos['a2'] && pos['a2'] == pos['c2'])) && (pos['b2'] != '')
    ) {
        winner(pos['b2'])
    }
    else if (
        ((pos['c3'] == pos['c2'] && pos['c3'] == pos['c1']) ||
            (pos['c3'] == pos['a3'] && pos['c3'] == pos['b3'])) && pos['c3' != '']
    ) {
        winner(pos['c3'])
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
    console.log(winner + " venceu");
    return gameOver = true
}

function play(array) {
    var randomItem = array[Math.floor(Math.random() * array.length)];
    var audio = new Audio();
    audio.src = randomItem;
    audio.loop = false;
    audio.play();
}

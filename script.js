const player1 = "Bolsonaro";
const player2 = "Lula";
var turn = player1;
var conter = 0;
var gameOver = false;

display();
played();

function in_a_tie(conter) {
    if (conter == 9) {
        var in_a_tie = document.getElementById('mostra')
        in_a_tie.innerHTML = "Jogo empatado!"
        setTimeout(function(){
            in_a_tie.innerHTML = ""
            reset();
        },2000)
        return gameOver = true
    }
}
function display() {
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
    display();
    var box = document.getElementsByClassName('box');
    var img = document.getElementsByClassName('imgbox');
    for (let i = 0; i < 9; i++) {
        box[i].setAttribute("played", "");
        img[i].setAttribute("src", "");
    }
}
function played() {
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
                        soundBolsonaro()
                        conter++
                        console.log(conter)
                    }
                    else {
                        this.childNodes[0].setAttribute("src", "img/lula.png");
                        this.setAttribute("played", player2);
                        turn = player1;
                        soundLula()
                        conter++
                    }
                    display();
                    checkWinner();
                    in_a_tie(conter)
                }
            }
        })
    }
}
function checkWinner() {
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

function soundBolsonaro() {
    var array = [
        "audio/temQueSeFuderBolsonaro.mp3",
        "audio/chora agora e da q te dou outra.mp3",
        "audio/DaQueEuTeDouOutra.mp3"
    ];
    play_audio(array)
}
function soundLula() {
    var array = [
        "audio/pipinha.mp3",
        "audio/souAnalfabeto.mp3",
        "audio/honesto.mp3"
    ];
    play_audio(array)
}
function winner(winner) {
    var ganha = document.getElementById('mostra')
    ganha.innerHTML = "Ganhador é " + winner
    conter=0;
    setTimeout(function(){
        ganha.innerHTML = ""
    },2000)
    return gameOver = true
}
function play_audio(array) {
    var randomItem = array[Math.floor(Math.random() * array.length)];
    var audio = new Audio();
    audio.src = randomItem;
    audio.loop = false;
    audio.play();
}

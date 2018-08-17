const player1 = "X";
const player2 = "O";
var turn = player1;
var gameOver = false;

refreshMostrador();
starter();

function refreshMostrador(){
    if (gameOver) {
        console.log("gameOver")
        return;}

    if (turn == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "https://fox-gg.com/wp-content/uploads/2018/07/X-Shape-PNG-High-Quality-Image.png");
    }
    else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "http://www.pngmart.com/files/4/Circle-PNG-HD.png");
    }
    
}

function starter(){
    var boxs = document.getElementsByClassName("box");
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", function(){
            
            if (gameOver) {
                console.log("gameOver")
                return;};

            if (this.getElementsByTagName('img').length == 0) {
                if (turn == player1){
                    console.log("jslajfsfs")
                    this.innerHTML = "<img src='https://fox-gg.com/wp-content/uploads/2018/07/X-Shape-PNG-High-Quality-Image.png' border='0' height='90'>";
                    this.setAttribute("played", player1);
                    turn = player2;
                }
                else{
                    
                    this.innerHTML = "<img src='http://www.pngmart.com/files/4/Circle-PNG-HD.png' border='0' height='90'>";
                    this.setAttribute("played", player2);
                    turn = player1;
                }
                refreshMostrador();
                verificaVencedor();
            }
        })
              
    }
}

function verificaVencedor(){
    var pos = {
        a1:'', a2:'', a3:'',
        b1:'', b2:'', b3:'',
        c1:'', c2:'', c3:''
    };

    for (p in pos) {
        pos[p]=document.getElementById(p).getAttribute("played");
    }
    
    if (((pos['a1'] == pos['b1'] && pos['b1'] == pos['c1']) ||
        (pos['a1'] == pos['a2'] && pos['a2'] == pos['a3']) ||
        (pos['a1'] == pos['b2'] && pos['b2'] == pos['c3'])) && (pos['a1'] != '')
    )
    {
        vencedor = pos['a1']
        console.log(vencedor+" venceu");
        return gameOver=true
    }
    else if (((pos['b2'] == pos['b1'] && pos['b2'] == pos['b3']) ||
            (pos['b2'] == pos['a3'] && pos['a3'] == pos['c1']) ||
            (pos['b2'] == pos['a2'] && pos['a2'] == pos['c2'])) && (pos['b2'] != '')
    )
    {
        vencedor = pos['b2']
        console.log(vencedor+" venceu");
        return gameOver=true
    }
    else if (
            ((pos['c3'] == pos['c2'] && pos['c3'] == pos['c1']) ||
            (pos['c3'] == pos['a3'] && pos['c3'] == pos['b3'])) && pos['c3' != '']
    )
    {
        vencedor = pos['c3']
        console.log(vencedor+" venceu");
        return gameOver=true
    }
}
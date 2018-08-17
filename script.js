const player1 = "X";
const player2 = "O";
var turn = player1;
var gameOver = false;

refreshMostrador();
starter();

function refreshMostrador(){
    if (gameOver) {return;}

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
            
            if (gameOver) {return;};

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
            }
        })
              
    }
}

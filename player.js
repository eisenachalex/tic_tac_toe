function Player(marker) {
    this.marker = marker;
    this.makeMove = function(board){
        move = Math.floor(Math.random()*9);
        if(board[move] === 0){
            board[move] = marker;
            // document.getElementById(move).innerHTML=marker;
        }
        else{
            this.makeMove(board);
        }
    }
}

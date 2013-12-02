function Player(marker) {
    this.marker = marker;
    this.makeMove = function(board,move){
        if(board[move] === 0){
            board[move] = marker;
            return "valid move";
        }
    }
}

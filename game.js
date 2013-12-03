
function Game(player1,player2){
    this.player1 = player1;
    this.player2 = player2;
    this.board = [0,0,0,0,0,0,0,0,0];
    this.whoseTurn = 1;

    this.winner = function(board,player){
        if((board[0] === player.marker && board[3] === player.marker && board[6] === player.marker) ||
            (board[1] === player.marker && board[4] === player.marker && board[7] === player.marker) ||
            (board[2] === player.marker && board[5] === player.marker && board[8] === player.marker) ||
            (board[0] === player.marker && board[1] === player.marker && board[2] === player.marker) ||
            (board[3] === player.marker && board[4] === player.marker && board[5] === player.marker) ||
            (board[6] === player.marker && board[7] === player.marker && board[8] === player.marker) ||
            (board[6] === player.marker && board[4] === player.marker && board[2] === player.marker) ||
            (board[0] === player.marker && board[4] === player.marker && board[8] === player.marker)) {
            return player;
        }
    }
    this.draw = function(){
        for(var i = 0; i < this.board.length; i++){
            if(this.board[i] === 0){
                return;
            }
        }
        return "draw";
    }
    this.findCurrentPlayer = function(){
        if(this.whoseTurn % 2 === 0) {
            return this.player2;
        }
        else{
            return this.player1;
        }
    }
    this.gameOver = function(board){
        if(this.winner(this.board,player1) || this.winner(this.board,player2) || this.draw()){
            return "game over";
        }
    }
}

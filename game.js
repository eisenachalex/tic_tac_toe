
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
                console.log(player.marker + " wins!")
                return player;
        }
    }
    this.gameOver = function(){
        for(var i = 0; i < this.board.length; i++){
            if(this.board[i] === 0){
                return;
            }
        }
        console.log("it's a tie")
        return "game over";
    }
    this.findCurrentPlayer = function(){
        if(this.whoseTurn % 2 === 0) {
            return this.player2;
        }
        else{
            return this.player1;
        }
    }
    this.playGame = function(){
        currentPlayer = this.findCurrentPlayer()
        currentPlayer.makeMove(this.board,this.player1)
        this.whoseTurn += 1;
        if(this.winner(this.board,currentPlayer) || this.gameOver()){
        }
        else{
            this.playGame();
        }
    }
}

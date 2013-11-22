
var count = 1;
var close_comp;
var opposing_player;
function Player(name, marker) {
        this.name = name;
        this.marker = marker;
        this.moves = [];
}
function combo_match(arr, bigger_arr) {
        var length = bigger_arr.length;
        for(var i = 0; i < length; i++) {
                if(arr[0] == bigger_arr[i]) {
                        for(var i = 0; i < bigger_arr.length; i ++) {
                                if(arr[1] == bigger_arr[i]) {
                                        for(var i = 0; i < bigger_arr.length; i ++) {
                                                if(arr[2] == bigger_arr[i]) {
                                                        return true;
                                                }
                                        }
                                }        
                        }
                }
        }
        return false;
}
function Game(player_1, player_2) {
        this.board = [0,1,2,3,4,5,6,7,8];
        this.winning_combos = [
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [6,4,2],
                        [0,4,8]];

    this.playerWon = function(player) {
		winning_combos = [
	        [0,3,6],
	        [1,4,7],
	        [2,5,8],
	        [0,1,2],
	        [3,4,5],
	        [6,7,8],
	        [6,4,2],
	        [0,4,8]
	    ];
        for(var i = 0; i < 8; i++) {
            if(combo_match(winning_combos[i], player.moves)) {
               	return true;
            }
        }

    }
    this.makeMove = function(player, move) { 
	    player.moves.push(move);
	    console.log("player move " + move)
	    this.remove(move);
	}
    this.moveTaken = function(attempted_move, player) {
        for (var i = 0; i < player.moves.length; i++) {
            if(attempted_move == player.moves[i]) {
                return false;
            }
        }
        return true;
    }
    this.remove = function(move) {
       	for(var i = 0; i < this.board.length; i++) {
	        if(this.board[i] == move) {
	        	this.board.splice(i,1)
	            return;
	        }
        }
    }
    this.executeMove = function(move) {
	    if(game.moveTaken(move,player_1)  && game.moveTaken(move,player_2)) {
            game.makeMove(current_player, move)
            $("td#" + move).html(current_player.marker);
            count+= 1;
        }
        else {
        }
        if(game.playerWon(current_player)) {
       		$("#status").html(current_player.name + " wins");
			return;
        }
        else {
        	game.playGame();
        }
    }

    this.playGame = function() {
    	var foo = "foo";
		if(count % 2 == 0) {
	        current_player = player_1;
	        if(closeCompetition(player_1)) {
	            var move = close_comp;
	        }
	        else if(center()) {
	            var move = 4;
	        }
	        else if(closeCompetition(player_2)) {
	            var move = close_comp;
	        }
	        else {
	        	var move = game.board[0];
	        }
			game.executeMove(move);
		}
		else {
			current_player = player_2;
	   		$("td").click(function() {
	    		var move = parseInt(($(this).attr("id")));
	     		game.executeMove(move);
	   		})
		}
   	 }
}

$(document).ready(function() {
        player_1 = new Player("Computer", "X");
        player_2 = new Player("You", "O")
        game = new Game(player_1, player_2);
        game.playGame();        
})


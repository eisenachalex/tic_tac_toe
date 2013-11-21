
var count = 0;
var next_move;
var close_comp;
var opposing_player;


function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	this.moves = [];
}






function combo_match(arr, bigger_arr) {
	match = 0
	for(var i = 0; i < bigger_arr.length; i++) {
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
			[0,4,8]
	];

	this.playerWon = function(player) {

		for(var i = 0; i < this.winning_combos.length; i++) {
			if(combo_match(this.winning_combos[i], player.moves)) {
				return true;
			}
			else {
				console.log("not a winner " + this.winning_combos[i]);
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

	this.playGame = function() {

if(count % 2 == 0) {
		current_player = player_1;
		$("#status").html(current_player.name + "'s turn");
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

		if (game.moveTaken(move,player_1)  && game.moveTaken(move,player_2)) {
			game.makeMove(current_player, move)
			$("td#" + move).html(current_player.marker);
			count+= 1;
			console.log(current_player.moves);
		}
		else {
			 $("#status").html("That move has been taken")
		}
		if(game.playerWon(current_player)) {
			$("#status").html("You Win!")

			return;
		}
		else {
			game.playGame();
		}

	}

	else {
		current_player = player_2;
		$("#status").html(current_player.name + "'s turn");
		$("td").click(function() {
			var move = parseInt(($(this).attr("id")));
			if (game.moveTaken(move,player_1)  && game.moveTaken(move,player_2)) {
				game.makeMove(current_player, move)
				$("td#" + move).html(current_player.marker);
				count+= 1;
				console.log(count);
			}
			else {
				 $("#status").html("That move has been taken")
			}
			if(game.playerWon(current_player)) {
				$("#status").html("You Win!")

				return;
			}
			else {
				game.playGame();
			}

		})

	}

	}

}

$(document).ready(function() {

	player_1 = new Player("Alex", "X");
	player_2 = new Player("Matt Jones", "O")
	game = new Game(player_1, player_2);
	game.playGame();
	

})







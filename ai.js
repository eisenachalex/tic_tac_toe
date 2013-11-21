function center() {
	for(var i = 0; i < game.board.length; i++) {
		if(game.board[i] == 4) {
			return true;
		}
	}
	return false;


}





function combo_match_2(arr, bigger_arr) {
	match = 0;
	result = [];
	for(var i = 0; i < bigger_arr.length; i++) {
		if(arr[0] == bigger_arr[i]) {
			match += 1;
			result.push(bigger_arr[i])
		}
		if(arr[1] == bigger_arr[i]) {
			match += 1;
			result.push(bigger_arr[i])

		}
		if(arr[2] == bigger_arr[i]) {
			match += 1;
			result.push(bigger_arr[i])

		}
		
	}
	if(match == 2) {
		return true;
	}
	else {
		return false;
	}
}

function removeSub(arr, index) {

arr.splice(index,1);


}



function closeCompetition(player) {
		if(player == player_1) {
			opposing_player = player_2;
		}
		else {
			opposing_player = player_1;
		}
		for(var i = 0; i < game.winning_combos.length; i++) {

			if(combo_match_2(game.winning_combos[i], player.moves)) {
				potential_win = game.winning_combos[i];
				console.log("potential_win: " + potential_win)
				console.log("player moves: " + player.moves)
				console.log("opposing player moves: " + opposing_player.moves)


					for(var i = 0; i < opposing_player.moves.length; i++) {
					if(potential_win[0] == opposing_player.moves[i]) {
						console.log("lost on 1")
						break;
					}
					if(potential_win[1] == opposing_player.moves[i]) {
						console.log("lost on 2")
						break;
					}	
					if(potential_win[2] == opposing_player.moves[i]) {
						console.log("lost on 3")
						break;
					}
				}





				for(var i = 0; i < player.moves.length; i++) {
					if(potential_win[0] == player.moves[i]) {
						removeSub(potential_win, 0);
					}
					if(potential_win[1] == player.moves[i]) {
						removeSub(potential_win, 1);

					}
					if(potential_win[2] == player.moves[i]) {
						removeSub(potential_win, 2);

					}
				}
				console.log("final;" + potential_win);

				close_comp = potential_win[0];

				return true;
			}

		}


}









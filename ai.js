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
	        for(var i = 0; i < opposing_player.moves.length; i++) {
                if(potential_win[0] == opposing_player.moves[i]) {
                    break;
                }
                if(potential_win[1] == opposing_player.moves[i]) {
                    break;
                }        
                if(potential_win[2] == opposing_player.moves[i]) {
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
	        close_comp = potential_win[0];
	        return true;
	    }
	}
}
function fork_match(arr, bigger_arr) {
    match = 0;
        for(var i = 0; i < bigger_arr.length; i++) {
                if(arr[0] == bigger_arr[i]) {
                    match += 1;
                }
                if(arr[1] == bigger_arr[i]) {
	                match += 1;
                }                           
        }
        if(match == 2) {
            return true;
        }
        else {
            return false;
        }
}
function fork_opp(player) {
	corner_matches = [[2,6],[0,8]];
	for(var i = 0; i < corner_matches.length; i++){
		if(fork_match(corner_matches[i], player.moves)) {
			corner_counter = 3;
			return true;
		}
	}
}
function fork_catcher(player) {
	if(combo_match_2([5,7], player.moves)) {
		for(var i = 0; i < player.moves.length; i ++) {
			if(player_1.moves[i] == 8) {
				return false;
			}
		}
		fork_catch = 8;
		return true;
	}

}
function opposing_corner(current_player, opposing, arr) {
	function match(number, player) {
	for(var i = 0; i < player.moves.length; i++) {
		if(number == player.moves[i]) {
			return true;
		}
	}
	return false;
	}
	if(match(arr[0],opposing)){
		if(match(arr[1],opposing)){
			return false;
		}
		else if (match(arr[1],current_player)) {
			return false;
		}
		else {
			take_other_corner = arr[1];
			return true;
		}
	}
	else if(match(arr[1],opposing)){
		if(match(arr[0],opposing)){
			return false;
		}
		else if(match(arr[0],current_player)) {
			return false;
		}
		else {
			take_other_corner = arr[0];
			return true;
		}
	}
	else {
		return false;
	}

}
function emptyCorner(board) {
	function match(number, board) {
		for(var i = 0; i < board.length; i++) {
			if(number == board[i]) {
				return true;
			}
		}
		return false;
	}
	if(match(0,board)) {
		take_corner = 0;
		return true;
	}
	else if (match(2,board)) {
		take_corner = 2;
		return true;
	}
	else if (match(6,board)) {
		take_corner = 6;
		return true;
	}
	else if (match(8,board)) {
		take_corner = 8;
		return true;
	}
	else {
		return false;
	}
}


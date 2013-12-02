function AI(marker) {
	this.marker = marker;
    this.makeMove = function(board,player){
    	if(this.oneLeft(board,this) || this.oneLeft(board,this) === 0 ){
    	   move = this.oneLeft(board,this);
    	}
    	else if (this.oneLeft(board,player) || this.oneLeft(board,player) === 0){
    	   move = this.oneLeft(board,player);
    	}
    	else if (this.forkCatch(board,player)){
    	   move = this.forkCatch(board,player);
    	}
    	else if (this.forkOpp(board,player)){
    	   move = this.forkOpp(board,player);
    	}
    	else if (this.center(board)){
    	   move = 4;
    	}
    	else if (this.opposingCorner(board,player) || this.opposingCorner(board,player) === 0 ){    		
    	   move = this.opposingCorner(board,player);
    	}
    	else if(this.emptyCorner(board) || this.emptyCorner(board) === 0){
    	   move = this.emptyCorner(board);
    	}
    	else {
    	   move = Math.floor(Math.random()*9);
    	}
        if(board[move] === 0){
            board[move] = marker;
            return move;
        }
        else{
            this.makeMove(board,player);
        }
    }
    this.playerMoves = function(player,board){
        playerMoves = [];
        for(var i = 0; i < board.length; i++){
            if(board[i] === player.marker) {
                playerMoves.push(i);
            }
	   }
        return playerMoves;
    }
    this.match = function(arr,bigArr){
        matches = [];
        for(var i = 0; i < bigArr.length; i++){
            if(arr[0] == bigArr[i]){
                matches.push(bigArr[i]);
            }
            if(arr[1] == bigArr[i]){
                matches.push(bigArr[i]);
            }		
            if(arr[2] == bigArr[i]){
                matches.push(bigArr[i]);
            }	
        }
        return matches;
    }

    this.oneLeft = function(board,player){
	    var winningCombos = [
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [6,4,2],
                [0,4,8]
        ];
        var winner = [];
        var boardMoves = this.playerMoves(player,board);
        for(var i = 0; i < 8; i++){
        	var length = this.match(winningCombos[i],boardMoves).length;
        	if(length == 2){
        		winningCombo = winningCombos[i];
                for(var j = 0; j < 3; j++) {
                    if(board[winningCombo[j]] === 0){
                         winner.push(winningCombo[j]);
                    }
        		}
        	}
        }
        return winner[0];
	}
    this.forkOpp = function(board,player){
        if(board[2] === player.marker && board[6] === player.marker && board[3] === 0){
		    return 3;
        }
        else if (board[0] === player.marker && board[8] === player.marker && board[3] === 0){
            return 3;
        }
        else if (board[4] === player.marker && board[8] === player.marker && board[6] === 0){
            return 6;
        }
        else if (board[4] === player.marker && board[8] === player.marker && board[2] === 0){
            return 2;
        }
    }
    this.forkCatch = function(board,player){
        if(board[5] === player.marker && board[7] === player.marker && board[8] === 0){
            return 8;
        }
        else if(board[8] === player.marker && board[1] === player.marker && board[2] === 0){
            return 2;
        }
    }
    this.opposingCorner = function(board,player){
        if(board[0] === player.marker && board[8] === 0){
            return 8;
        }
        else if(board[8] === player.marker && board[0] === 0){
            return 0;
        }
        else if(board[6] === player.marker && board[2] === 0){
            return 2;
        }
        else if(board[2] === player.marker && board[6] === 0){
            return 6;
        }
    }
    this.center = function(board){
        if(board[4] === 0){
            return 4;
        }
    }
    this.emptyCorner = function(board){
        if(board[0] === 0){
            return 0;
        }
        else if(board[2] === 0){
            return 2;
        }
        else if(board[6] === 0){
            return 6;
        }
        else if(board[8] === 0){
            return 8;
        }
    }
}


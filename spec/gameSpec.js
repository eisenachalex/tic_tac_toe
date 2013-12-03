describe("New Game", function() {
	var player1 = new Player("X");
	var player2 = new AI("O");
	var game = new Game(player1,player2);

	it("player should have marker", function() {
		expect(player1.marker).toEqual("X");
		expect(player2.marker).toEqual("O");
	});

	it("game should not be over", function(){
		expect(game.gameOver()).toBe(undefined);
	}); 
	it("game should not have a winner", function(){
		expect(game.winner(game.board,player1)).toBe(undefined);
		expect(game.winner(game.board,player2)).toBe(undefined);
	})
	it("currentPlayer should be player1", function(){
		expect(game.findCurrentPlayer()).toEqual(player1)
	});
});

describe("Artificial Intelligence",function() {
	var player1 = new Player("X");
	var player2 = new AI("O");
	var game = new Game(player1,player2);

	it("should call oneLeft with correct value", function(){
		game.board = ["X","X",0,0,0,"X",0,0,0];	
		expect(player2.oneLeft(game.board,player1)).toEqual(2);
		game.board = ["X","O",0,0,"O",0,0,0,0]
		expect(player2.oneLeft(game.board,player2)).toEqual(7);
	});
	it("should call center with correct value", function(){
		game.board = ["X",0,0,0,0,0,0,0,0];	
		expect(player2.center(game.board)).toEqual(4);
		game.board = ["X",0,0,0,"X",0,0,0,0];	
		expect(player2.center(game.board)).toBe(undefined);

	});
	it("should call forkCatch with correct value", function(){
		game.board = [0,0,0,0,0,"X",0,"X",0];
		expect(player2.forkCatch(game.board,player1)).toEqual(8);
		game.board = [0,"X",0,0,0,0,0,0,0];
		expect(player2.forkCatch(game.board,player1)).toBe(undefined);
	});
	it("should call forkOpp with correct value", function(){
		game.board = ["X",0,0,0,0,0,0,0,"X"];	
		expect(player2.forkOpp(game.board,player1)).toEqual(3);
		game.board = ["X",0,0,0,"X",0,0,0,0];
		expect(player2.forkOpp(game.board,player1)).toBe(undefined);
	});
	it("should call opposingCorner with correct value", function(){
		game.board = ["X",0,0,0,0,0,0,0,0];	
		expect(player2.opposingCorner(game.board,player1)).toEqual(8);
		game.board = ["X",0,"0",0,0,0,"X",0,"O"];
		expect(player2.opposingCorner(game.board,player1)).toBe(undefined);
	});
	it("should call emptyCorner with correct value", function(){
		game.board = ["X",0,"O",0,"O",0,0,0,"X"];	
		expect(player2.emptyCorner(game.board)).toEqual(6);
	});
});
describe("Finished Game", function() {
	var player1 = new Player("X");
	var player2 = new AI("O");
	var game = new Game(player1,player2);
	it("should have a valid winner", function(){
		game.board = ["X","X","X",0,0,0,0,0];
		expect(game.draw()).toBe(undefined);
		expect(game.winner(game.board,player1)).toEqual(player1);
		expect(game.winner(game.board,player2)).not.toEqual(player2);
	});
	it("should finish in a tie with no winner", function(){
		game.board = ["X","X","O","O","O","X","X","X"];
		expect(game.draw()).toEqual("draw");
		expect(game.winner(game.board,player1)).toBe(undefined);
		expect(game.winner(game.board,player2)).toBe(undefined);
	});
	it("player1 should never win", function(){
		for(var ai = 0; ai < 1000; ai ++) {
			var game = new Game(player1,player2);
			//substitute move with random number generator for player1
			game.gameOver();
			expect(game.winner(game.board,player1)).not.toEqual(player1);
		}
	})
 })


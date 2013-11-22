describe("Player Object", function() {
	player_1 = new Player("Alex", "X");
	player_2 = new Player("Computer", "O");

	it("has a name", function() {
		expect(player_1.name).toEqual("Alex");
	});
	it("has an array of moves", function() {
		expect(player_1.moves).toEqual([]);
	});
	it("has a marker", function() {
		expect(player_1.marker).toEqual("X");
	});
})

describe("Game Object", function() {
		game = new Game(player_1, player_2);

	it("expects game to have two player objects", function() {
		expect(player_1).toBeDefined();
		expect(player_2).toBeDefined();
	});
	it("has a game board", function() {
		expect(game.board).toEqual([0,1,2,3,4,5,6,7,8]);
	});
	it("has winning combos", function() {
		expect(game.winning_combos).toBeDefined();
	});
	it("should have a playerWon fuction", function() {
		expect(game.playerWon).toBeDefined();
	});
	it("should have a moveTaken fuction", function() {
		expect(game.moveTaken).toBeDefined();
	});
	it("should have a remove fuction", function() {
		expect(game.remove).toBeDefined();
	});
	it("should have a executeMove fuction", function() {
		expect(game.executeMove).toBeDefined();
	});
	it("should have a makeMove function", function() {
		expect(game.makeMove).toBeDefined();
	});
	it("should have a playGame function", function() {
		expect(game.playGame).toBeDefined();
	})

})

describe("Move Made", function() {
	it("should have a count variable defined", function() {
		expect(count).toBeDefined();
	})
	it("should have a move defined", function() {
		expect(foo).toBeDefined();
	})
})
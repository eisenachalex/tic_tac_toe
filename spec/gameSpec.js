describe("Game", function() {
	var player_1 = new Player("Computer", "X");
	var player_2 = new Player("Human", "O");
	i = 0;
	while (i < 1000){
	newGame(0);
	console.log(i);
	i ++;
	}

	it("player should have moves", function() {
		expect(player_1.moves).toEqual([]);
	})
});
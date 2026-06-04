function initGame() {

    loadGame();

    updateUI();

    setInterval(gameLoop, 100);

    setInterval(saveGame, 5000);
}

initGame();

function gameLoop() {

    game.age += 0.001;

    if (game.currentJob) {

        game.progress +=
            100 /
            jobs[game.currentJob].duration;

        if (game.progress >= 100) {

            game.progress = 0;

            game.gold +=
                jobs[game.currentJob].reward;
        }
    }

    updateUI();
}

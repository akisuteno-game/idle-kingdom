function updateUI() {

    document.getElementById("gold").textContent =
        game.gold;

    document.getElementById("age").textContent =
        game.age.toFixed(1);

    document.getElementById("job").textContent =
        game.currentJob
            ? jobs[game.currentJob].name
            : "なし";

    document.getElementById("progressFill").style.width =
        game.progress + "%";
}

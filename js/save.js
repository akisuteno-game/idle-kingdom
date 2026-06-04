function saveGame() {
    localStorage.setItem(
        "idleKingdomSave",
        JSON.stringify(game)
    );
}

function loadGame() {

    const save =
        localStorage.getItem("idleKingdomSave");

    if (!save) return;

    const data = JSON.parse(save);

    Object.assign(game, data);
}

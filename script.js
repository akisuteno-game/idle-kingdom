let gold = 0;

function updateGold() {
    document.getElementById("gold").textContent = gold;
}

function work() {
    gold += 1;
    updateGold();
}

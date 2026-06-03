let gold = 0;

function updateGold() {
    document.getElementById("gold").textContent = gold;
}

function work() {
    gold++;
    updateGold();
}

document.addEventListener(
    "touchstart",
    function () {},
    { passive: true }
);

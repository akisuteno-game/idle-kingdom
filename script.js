let gold = 0;

const goldText = document.getElementById("gold");
const workBtn = document.getElementById("workBtn");

function updateGold() {
    goldText.textContent = gold;
}

function work() {
    gold++;
    updateGold();
}

workBtn.addEventListener("pointerdown", function (e) {
    e.preventDefault();
    work();
});

document.addEventListener(
    "gesturestart",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

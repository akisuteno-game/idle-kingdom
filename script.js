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

workBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    work();
}, { passive: false });

workBtn.addEventListener("click", work);

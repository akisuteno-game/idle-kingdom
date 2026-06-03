let gold = 0;

let working = false;

const goldText = document.getElementById("gold");
const workBtn = document.getElementById("workBtn");
const progressFill = document.getElementById("progressFill");

function updateGold() {
    goldText.textContent = gold;
}

function startWork() {

    if (working) return;

    working = true;

    workBtn.disabled = true;

    let progress = 0;

    const interval = setInterval(() => {

        progress += 1;

        progressFill.style.width =
            (progress / 60) * 100 + "%";

        if (progress >= 60) {

            clearInterval(interval);

            gold++;

            updateGold();

            progressFill.style.width = "0%";

            workBtn.disabled = false;

            working = false;
        }

    }, 50);
}

workBtn.addEventListener(
    "pointerdown",
    function (e) {
        e.preventDefault();
        startWork();
    }
);

let gold = 0;
let age = 14;

let currentJob = null;
let progress = 0;

const goldText = document.getElementById("gold");
const ageText = document.getElementById("age");
const currentJobText = document.getElementById("currentJob");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const beggarBtn =
    document.getElementById("beggarBtn");

function updateUI() {

    goldText.textContent = gold;

    ageText.textContent =
        age.toFixed(1);

    currentJobText.textContent =
        currentJob || "なし";
}

beggarBtn.onclick = function () {

    currentJob = "物乞い";

    progressText.textContent =
        "作業中...";

    updateUI();
};

setInterval(() => {

    age += 0.001;

    if (currentJob === "物乞い") {

        progress += 1;

        progressFill.style.width =
            progress + "%";

        progressText.textContent =
            progress + "%";

        if (progress >= 100) {

            progress = 0;

            gold += 1;
        }
    }

    updateUI();

}, 100);

updateUI();

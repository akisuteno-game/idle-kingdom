let gold = 0;

function updateGold() {
    document.getElementById("gold").textContent = gold;
}

function work() {
    gold += 1;
    updateGold();
}

document.addEventListener(
    "gesturestart",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

document.addEventListener(
    "gesturechange",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

document.addEventListener(
    "gestureend",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

let lastTouchEnd = 0;

document.addEventListener(
    "touchend",
    function (event) {
        const now = Date.now();

        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }

        lastTouchEnd = now;
    },
    false
);

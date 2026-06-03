let gold = 0;

function updateGold() {
    document.getElementById("gold").textContent = gold;
}

function work() {
    gold++;
    updateGold();
}

function stopEvent(e) {
    e.preventDefault();
}

document.addEventListener("gesturestart", stopEvent, {
    passive: false
});

document.addEventListener("gesturechange", stopEvent, {
    passive: false
});

document.addEventListener("gestureend", stopEvent, {
    passive: false
});

document.addEventListener("touchmove", stopEvent, {
    passive: false
});

document.addEventListener("dblclick", stopEvent, {
    passive: false
});

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

script.js
const begin = document.getElementById("begin");
const hero = document.getElementById("hero");
const world = document.getElementById("world");

begin.addEventListener("click", function () {
    hero.classList.add("hidden");
    world.classList.remove("hidden");
    window.scrollTo({
        top: world.offsetTop,
        behavior: "smooth"
    });
});

// Surprise cards
document.querySelectorAll(".cardBtn").forEach(function(button) {
    button.addEventListener("click", function() {
        const target = document.getElementById(button.dataset.open);
        if (target) {
            target.classList.remove("hidden");
        }
    });
});

// Close buttons
document.querySelectorAll(".close").forEach(function(button) {
    button.addEventListener("click", function() {
        button.parentElement.classList.add("hidden");
    });
});

// Wish
const wish = document.getElementById("makewish");

if (wish) {
    wish.addEventListener("click", function() {
        document.getElementById("wishdone").classList.remove("hidden");
        wish.innerText = "WISH SENT ✨";
    });
}

// YES button
const yes = document.getElementById("yes");

if (yes) {
    yes.addEventListener("click", function() {
        document.getElementById("yay").classList.remove("hidden");
    });
}

// NO button runs away
const no = document.getElementById("no");
const arena = document.getElementById("arena");

function moveNo() {
    no.style.position = "absolute";

    const x = Math.random() * Math.max(10, arena.clientWidth - no.offsetWidth);
    const y = Math.random() * Math.max(10, arena.clientHeight - no.offsetHeight);

    no.style.left = x + "px";
    no.style.top = y + "px";

    document.getElementById("escape").classList.remove("hidden");
}

if (no) {
    no.addEventListener("mouseenter", moveNo);

    no.addEventListener("touchstart", function(e) {
        e.preventDefault();
        moveNo();
    });
}

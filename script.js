script.js
document.addEventListener("DOMContentLoaded", function () {

    // ENTER THE SURPRISE
    const begin = document.getElementById("begin");
    const hero = document.getElementById("hero");
    const world = document.getElementById("world");

    if (begin) {
        begin.onclick = function () {
            hero.classList.add("hidden");
            world.classList.remove("hidden");

            setTimeout(function () {
                world.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        };
    }


    // OPEN THE THREE SURPRISE CARDS
    const cards = document.querySelectorAll(".cardBtn");

    cards.forEach(function (card) {

        card.onclick = function () {

            const id = card.getAttribute("data-open");
            const modal = document.getElementById(id);

            if (modal) {
                modal.classList.remove("hidden");
            }

        };

    });


    // CLOSE BUTTONS
    const closeButtons = document.querySelectorAll(".close");

    closeButtons.forEach(function (button) {

        button.onclick = function () {
            const modal = button.parentElement;
            modal.classList.add("hidden");
        };

    });


    // MAKE A WISH
    const wishButton = document.getElementById("makewish");
    const wishDone = document.getElementById("wishdone");

    if (wishButton) {

        wishButton.onclick = function () {

            wishDone.classList.remove("hidden");

            wishButton.innerText = "WISH SENT ✨";

            createStars();

        };

    }


    // YES BUTTON
    const yes = document.getElementById("yes");
    const yay = document.getElementById("yay");

    if (yes) {

        yes.onclick = function () {

            yay.classList.remove("hidden");

            createStars();

        };

    }


    // NO BUTTON RUNS AWAY
    const no = document.getElementById("no");
    const arena = document.getElementById("arena");
    const escape = document.getElementById("escape");

    function moveNo() {

        if (!no || !arena) return;

        no.style.position = "absolute";

        const maxX = Math.max(
            0,
            arena.clientWidth - no.offsetWidth
        );

        const maxY = Math.max(
            0,
            arena.clientHeight - no.offsetHeight
        );

        no.style.left =
            Math.random() * maxX + "px";

        no.style.top =
            Math.random() * maxY + "px";

        if (escape) {
            escape.classList.remove("hidden");
        }

    }


    if (no) {

        // Computer
        no.addEventListener("mouseenter", moveNo);

        // Mobile
        no.addEventListener("touchstart", function (event) {

            event.preventDefault();
            moveNo();

        });

        // Extra safety
        no.onclick = function (event) {

            event.preventDefault();
            moveNo();

        };

    }


    // LITTLE STAR EFFECT
    function createStars() {

        for (let i = 0; i < 20; i++) {

            const star = document.createElement("div");

            star.innerText = "✦";

            star.style.position = "fixed";
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = "-20px";
            star.style.fontSize =
                12 + Math.random() * 18 + "px";

            star.style.zIndex = "9999";
            star.style.pointerEvents = "none";

            document.body.appendChild(star);

            star.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translateY(110vh) rotate(360deg)",
                        opacity: 0
                    }
                ],
                {
                    duration: 2200 + Math.random() * 1000,
                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                star.remove();
            }, 3500);

        }

    }

});

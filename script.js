script.js
const $ = (s) => document.querySelector(s);

const begin = $("#begin");
const hero = $("#hero");
const world = $("#world");

// ENTER SURPRISE
begin.onclick = () => {
  hero.classList.add("hidden");
  world.classList.remove("hidden");
  world.scrollIntoView({ behavior: "smooth" });
  sparkle();
};

// OPEN SURPRISE CARDS
document.querySelectorAll(".cardBtn").forEach((button) => {
  button.onclick = () => {
    const target = $("#" + button.dataset.open);

    if (target) {
      target.classList.remove("hidden");
      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };
});

// CLOSE MODALS
document.querySelectorAll(".close").forEach((button) => {
  button.onclick = () => {
    button.parentElement.classList.add("hidden");
  };
});

// MAKE A WISH
const wishButton = $("#makewish");

if (wishButton) {
  wishButton.onclick = () => {
    $("#wishdone").classList.remove("hidden");
    wishButton.textContent = "WISH SENT ✨";
    sparkle();
  };
}

// YES / NO GAME
const arena = $("#arena");
const no = $("#no");
const escapeText = $("#escape");
const yay = $("#yay");

function runAway() {
  if (!arena || !no) return;

  const rect = arena.getBoundingClientRect();

  const maxX = Math.max(
    5,
    rect.width - no.offsetWidth - 5
  );

  const maxY = Math.max(
    5,
    rect.height - no.offsetHeight - 5
  );

  no.style.position = "absolute";

  no.style.left =
    (5 + Math.random() * maxX) + "px";

  no.style.top =
    (5 + Math.random() * maxY) + "px";

  if (escapeText) {
    escapeText.classList.remove("hidden");
  }
}

// PC / MOUSE
if (no) {
  no.addEventListener("mouseenter", runAway);

  // MOBILE
  no.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      runAway();
    },
    { passive: false }
  );

  no.onclick = function (e) {
    e.preventDefault();
    runAway();
  };
}

// YES BUTTON
const yes = $("#yes");

if (yes) {
  yes.onclick = () => {
    if (yay) {
      yay.classList.remove("hidden");
    }

    sparkle();
  };
}

// SPARKLES / CONFETTI
function sparkle() {
  const icons = [
    "✦",
    "💗",
    "✨",
    "🌸",
    "💖",
    "🌷"
  ];

  for (let i = 0; i < 24; i++) {
    const s = document.createElement("span");

    s.textContent =
      icons[i % icons.length];

    s.style.position = "fixed";
    s.style.left =
      Math.random() * 100 + "vw";

    s.style.top = "-20px";

    s.style.zIndex = "9999";

    s.style.fontSize =
      12 + Math.random() * 18 + "px";

    s.style.pointerEvents = "none";

    s.style.transition =
      "transform 2.4s ease, opacity 2.4s ease";

    document.body.appendChild(s);

    setTimeout(() => {
      s.style.transform =
        `translate(
          ${Math.random() * 160 - 80}px,
          ${window.innerHeight + 40}px
        ) rotate(400deg)`;

      s.style.opacity = "0";
    }, 20);

    setTimeout(() => {
      s.remove();
    }, 2600);
  }
}

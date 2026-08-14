script.js
const begin = document.getElementById("begin");

begin.onclick = function () {
    document.getElementById("hero").style.display = "none";
    document.getElementById("world").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

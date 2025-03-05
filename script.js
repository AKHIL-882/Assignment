const bulb = document.getElementById("bulb");
const body = document.body;

let isLightOn = false;

bulb.addEventListener("click", () => {
    isLightOn = !isLightOn;
    if (isLightOn) {
        bulb.classList.add("glow");
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        bulb.classList.remove("glow");
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    setTimeout(() => {
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }, 500);
});

function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

function toggleMenu() {
    const nav = document.querySelector("nav");
    const burger = document.querySelector(".burger");
    nav.classList.toggle("active");
    burger.classList.toggle("active");
}
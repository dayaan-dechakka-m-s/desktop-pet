const ghost = document.getElementById("ghost");
const speech = document.getElementById("speech");

const messages = [
    "Boo! 👻",
    "Hello! ✨",
    "Hehe! 👻",
    "I'm your ghost!",
    "Don't be scared! 😂",
    "Give me attention! 💕",
    "You're doing great! ⭐",
    "Boooooo! 👻"
];

ghost.addEventListener("click", function () {

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    speech.textContent = randomMessage;

    ghost.classList.remove("clicked");

    void ghost.offsetWidth;

    ghost.classList.add("clicked");
});

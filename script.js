const ghost = document.getElementById("ghost");
const speech = document.getElementById("speech");

const messages = [
    "Boo! 👻",
    "Hello! ✨",
    "Hehe! 👻",
    "I'm your little ghost!",
    "Don't be scared! 😂",
    "Give me attention! 💕",
    "You're doing great! ⭐",
    "Boooooo! 👻"
];

ghost.addEventListener("click", function () {

    const randomNumber = Math.floor(
        Math.random() * messages.length
    );

    speech.textContent = messages[randomNumber];

    ghost.classList.remove("clicked");

    void ghost.offsetWidth;

    ghost.classList.add("clicked");
});

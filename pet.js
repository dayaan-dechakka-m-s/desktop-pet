const pet =
    document.getElementById("pet");

const emotion =
    document.getElementById("emotion");

let walking = false;


/*
    Make the pet walk
    to random locations.
*/

function randomWalk() {

    if (walking) return;

    walking = true;

    pet.classList.add(
        "walking"
    );

    const margin = 30;

    const maxX =
        window.screen.availWidth
        - 220;

    const maxY =
        window.screen.availHeight
        - 230;

    const x =
        margin +
        Math.random() *
        Math.max(100, maxX);

    const y =
        margin +
        Math.random() *
        Math.max(100, maxY);

    /*
        Ask Electron to move
        the actual transparent window.
    */

    if (window.desktopPet) {

        window.desktopPet.move(
            x,
            y
        );

    }

    setTimeout(
        () => {

            walking = false;

            pet.classList.remove(
                "walking"
            );

            decide();

        },
        3000 +
        Math.random() * 5000
    );

}


/*
    Decide what the pet
    does next.
*/

function decide() {

    const chance =
        Math.random();

    if (chance < .65) {

        setTimeout(
            randomWalk,
            1000
        );

    }

    else if (chance < .85) {

        sit();

    }

    else {

        sleep();

    }

}


/*
    Sitting behavior.
*/

function sit() {

    pet.style.transform =
        "scale(.95)";

    setTimeout(
        randomWalk,
        3000 +
        Math.random() * 4000
    );

}


/*
    Sleeping behavior.
*/

function sleep() {

    pet.style.transform =
        "rotate(-5deg) scale(.9)";

    emotion.textContent =
        "💤";

    showEmotion();

    setTimeout(
        () => {

            pet.style.transform =
                "";

            randomWalk();

        },
        6000 +
        Math.random() * 5000
    );

}


/*
    Click the dog.
*/

pet.addEventListener(
    "click",
    () => {

        emotion.textContent =
            "❤️";

        showEmotion();

        pet.style.transform =
            "scale(1.08)";

        setTimeout(
            () => {

                pet.style.transform =
                    "";

            },
            500
        );

    }
);


/*
    Double click.
*/

pet.addEventListener(
    "dblclick",
    () => {

        emotion.textContent =
            "🐾";

        showEmotion();

        randomWalk();

    }
);


/*
    Show emoji.

*/

function showEmotion() {

    emotion.classList.remove(
        "show-emotion"
    );

    void emotion.offsetWidth;

    emotion.classList.add(
        "show-emotion"
    );

}


/*
    Start.
*/

setTimeout(
    randomWalk,
    2000
);

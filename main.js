  const {
    app,
    BrowserWindow,
    screen,
    ipcMain
} = require("electron");

const path = require("path");

let petWindow;

function createPet() {

    const display = screen.getPrimaryDisplay();

    const { width, height } =
        display.workAreaSize;

    petWindow = new BrowserWindow({

        width: 190,
        height: 190,

        x: width - 230,
        y: height - 230,

        frame: false,

        transparent: true,

        alwaysOnTop: true,

        resizable: false,

        movable: true,

        skipTaskbar: true,

        hasShadow: false,

        webPreferences: {
            preload: path.join(
                __dirname,
                "preload.js"
            ),

            contextIsolation: true,

            nodeIntegration: false
        }
    });

    petWindow.setMenu(null);

    petWindow.setAlwaysOnTop(
        true,
        "floating"
    );

    petWindow.loadFile(
        "index.html"
    );

    petWindow.on(
        "closed",
        () => {
            petWindow = null;
        }
    );
}


app.whenReady().then(() => {

    createPet();

    app.on(
        "activate",
        () => {

            if (
                BrowserWindow
                    .getAllWindows()
                    .length === 0
            ) {
                createPet();
            }

        }
    );

});


app.on(
    "window-all-closed",
    () => {

        if (
            process.platform !== "darwin"
        ) {
            app.quit();
        }

    }
);


/*
    Move the transparent pet window.
*/

ipcMain.on(
    "move-pet",
    (event, x, y) => {

        if (!petWindow) return;

        petWindow.setPosition(
            Math.round(x),
            Math.round(y)
        );

    }
);


/*
    Close pet.
*/

ipcMain.on(
    "close-pet",
    () => {

        app.quit();

    }
);

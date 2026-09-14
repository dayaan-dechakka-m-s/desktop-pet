const {
    contextBridge,
    ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
    "desktopPet",
    {

        move(x, y) {

            ipcRenderer.send(
                "move-pet",
                x,
                y
            );

        },

        close() {

            ipcRenderer.send(
                "close-pet"
            );

        }

    }
);

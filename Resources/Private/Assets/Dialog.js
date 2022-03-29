import A11yDialog from "a11y-dialog";

let dialogues = [];

function domReady(callback) {
    let firstRun = true;

    function runCallback(event) {
        if (firstRun) {
            if (typeof callback == "function") {
                callback(event);
            }
            firstRun = false;
        }
    }

    if (document.readyState == "loading") {
        document.addEventListener("readystatechange", runCallback);
    } else {
        runCallback();
    }
}

domReady(() => {
    [...document.querySelectorAll(".carbon-dialog")].forEach((dialog) => {
        dialogues.push(new A11yDialog(dialog));
    });
});

export default dialogues;

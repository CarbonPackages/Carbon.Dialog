import A11yDialog from './_A11yDialog';

let dialogues = [];

function domReady(callback) {
    let firstRun = true;

    function runCallback(event) {
        if (firstRun) {
            if (typeof callback == 'function') {
                callback(event);
            }
            firstRun = false;
        }
    }

    if (document.readyState == 'loading') {
        document.addEventListener('readystatechange', runCallback);
    } else {
        runCallback();
    }
}

domReady(() => {
    let elements = document.querySelectorAll('.carbon-dialog');

    for (let index = 0; index < elements.length; index++) {
        dialogues.push(new A11yDialog(elements[index]));
    }
});

export default dialogues;

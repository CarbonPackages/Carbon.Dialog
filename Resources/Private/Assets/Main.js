import A11yDialog from "./_A11yDialog";

let elements = document.querySelectorAll(".dialog");
let dialogues = [];

for (let index = 0; index < elements.length; index++) {
    dialogues.push(new A11yDialog(elements[index]));
}

export default dialogues;

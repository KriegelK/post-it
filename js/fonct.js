let mouvement = false;
let postIT = new Array();
let x;
let y;
const addBlue = document.querySelector(".add-1");
const addRed = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");
let move = document.querySelector(".fa-people-carry");
let item = document.querySelector("#item");

/* ajoutez un post it */
addBlue.addEventListener("click", function() {

    monTest1 = new Postit(375, 92, "blue", "Post ");
    monTest1.afficheTest();
    postIT.push(monTest1);
    console.log(postIT);
});


/* Mouvement click enfoncer et relacher */
document.addEventListener("mousemove", e => {
    x = e.clientX;
    y = e.clientY;
});

document.addEventListener("mouseup", () => {
    mouvement = false;
});

function refresh() {
    if (mouvement) {
        monTest1.changePlace(x, y);
        monTest1.afficheTest();
    }
    setTimeout(refresh, 10);
}
refresh();



function delPost() {
    postIT.pop(monTest1);
}
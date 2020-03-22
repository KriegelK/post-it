class Postit {
    x;
    y;
    couleur;
    text;

    constructor(x, y, couleur, text) {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.text = text;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeColor(coul) {
        this.couleur = coul;
    }

    afficheTest() {
        let monElem = document.createElement("div");
        monElem.className = "notes";
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "250px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = ` <h3> ${this.text} </h3><p>test postit</p>`;
        document.body.appendChild(monElem);
    }
}

monTest1 = new Postit(435, 100, "blue", "Post ");
monTest2 = new Postit(435, 300, "red", "Post ");
monTest3 = new Postit(435, 500, "yellow", "Post");







 
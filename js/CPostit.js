class Postit {
    backgroundColor;
    heigth;
    width;
    textColor;
    textContent;
    positionX;
    positionY;
    changeColor(colo) {
        this.color = colo;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeTextColor(){

    }
    afficheTest() {
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "Je suis un postit" ;
        document.body.appendChild(monElem);
    }
}
monTest = new Postit(100, 200, 30, 'red');
monTest.afficheTest();






 
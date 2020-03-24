class Postit {
    posX;
    posY;
    couleur;
    text;

    constructor(posX, posY, couleur, text) {
        this.posX = posX;
        this.posY = posY;
        this.couleur = couleur;
        this.text = text;
    }

    changePlace(x, y) {
        this.posX = x;
        this.posY = y;
    }

    changeCouleur(color) {
        this.couleur = color;
    }

    afficheTest() {
        let monElem;
        let creation = false;

        if (document.getElementById("item") == null) {
            monElem = document.createElement("div");

            creation = true;
        } else {
            monElem = document.getElementById("item");
        }

        monElem.className = "note";
        monElem.id = "item";
        monElem.style.position = "fixed";
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.color = "black";
        monElem.innerHTML = ` 
        <div class="post-title">
            <h3> ${this.text} </h3>
        </div>
        <div class="post-body">
            <p>Add text</p> 
        </div>
        <div class="post-footer">
            <i class="fas fa-expand-arrows-alt move"></i>
            <i class="fas fa-compress-alt resize"></i>
            <i class="fas fa-edit edit"></i>
            <i class="fas fa-trash-alt del"></i>
        </div>   
            `;

        if (creation) {
            document.body.appendChild(monElem);
        }

        /* Mouvement du postit */
        document
            .querySelector(".move")
            .addEventListener("mousedown", function() {
                mouvement = true;
            });

        /* Resize  postit */
        document
            .querySelector(".resize")
            .addEventListener("mousedown", initResize, false);

        //click enfoncer pour resize
        function initResize(e) {
            window.addEventListener("mousemove", Resize, false);
            window.addEventListener("mouseup", stopResize, false);
        }
        //resize the element
        function Resize(e) {
            monElem.style.width = e.clientX - monElem.offsetLeft + "px";
            monElem.style.height = e.clientY - monElem.offsetTop + "px";
        }
        //relachement de souris stop resize
        function stopResize(e) {
            window.removeEventListener("mousemove", Resize, false);
            window.removeEventListener("mouseup", stopResize, false);
        }

        /* supr postit */
        document.querySelector(".del").addEventListener("click", function() {
            monElem.remove();
            delPost();
        });

        /* edit le postit */
        document.querySelector(".edit").addEventListener("click", function() {
            let button = document.createElement("button");
            button.innerHTML = "Confirm";
            monElem.appendChild(button);
            monElem.setAttribute("contenteditable", "true");

            button.addEventListener("click", function() {
                monElem.setAttribute("contenteditable", "false");
                button.remove();
            });
        });
    }
}





/* Création des postits */
/*
postit1.addEventListener('click', function()
{
        zone.addEventListener('mousedown', function()
        {
            i = i + 1;
            monTest = new PostIt(x, y, "white", "#BF1736", i);
            monTest.affichePostit();
        });
});
postit2.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#0D1440");
            monTest.affichePostit();
        });
});
postit3.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#1438A6");
            monTest.affichePostit();
        });
}); */

 
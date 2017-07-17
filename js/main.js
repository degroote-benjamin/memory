// var init
var tab = ["as1.jpg", "as2.png", "as3.png", "as4.png", "as1.jpg", "as2.png", "as3.png", "as4.png", "2c.jpg", "2carreau.png", "2t.jpg", "2c.jpg", "2carreau.png", "2t.jpg"]
var img = document.getElementsByTagName("img")
var resultat = []
var final = []
var div = document.getElementById("div")
var p = document.getElementById("p")
var compt1 = 0

// algorithm fisher
for (let i = tab.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var carte = tab[i];
    tab[i] = tab[j];
    tab[j] = carte;
}


// function on click
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        var compt = 0;
        img[i].src = "img/" + tab[i]
        img[i].alt = tab[i]
        resultat.push(tab[i])
        if (resultat.length === 2) {
            compt1++
            finish()
            setTimeout(verif, 500)
            setTimeout(function() {
                for (let x = 0; x < img.length; x++) {
                    if (final[x] == undefined) {
                        img[x].src = "img/dos.png"
                    } else {
                        img[x].src = "img/" + final[x]
                        compt++
                        console.log(compt)
                    }
                    if (compt === tab.length) {
                        div.style.display = "none"
                        p.innerHTML = "<p class='text-center'>Victoire <br> en " + compt1 + " coup<br><a href='index.html'>rejouer</a></p>"
                    }
                }
            }, 500)
        }
    })
};

//  verif if click 1 and click 2 are indentic or not
function verif() {
    if (resultat[0] !== resultat[1]) {
        for (let y = 0; y < img.length; y++) {
            if (img[y].alt === (resultat[0]) || img[y].alt === (resultat[1])) {
                img[y].src = "img/dos.png"
                img[y].alt = ""
            }
        }
        resultat.length = 0
    } else {
        resultat.length = 0
    }
}

// final table for know if the game is finish or not
function finish() {
    if (resultat[0] === resultat[1]) {
        for (let z = 0; z < img.length; z++) {
            if (img[z].alt === (resultat[0]) && img[z].alt === (resultat[1])) {
                final[z] = img[z].alt
            }
        }
    }
}

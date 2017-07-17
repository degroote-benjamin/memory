// var init
var tab = ["as1.jpg","as2.png","as3.png","as4.png","as1.jpg","as2.png","as3.png","as4.png","2c.jpg","2carreau.png","2t.jpg","2c.jpg","2carreau.png","2t.jpg"]
var img = document.getElementsByTagName("img")
var resultat = []

for(let i=0;i<img.length;i++){
img[i].addEventListener("click", function() {
  img[i].src = "img/" + tab[i]
  img[i].alt = tab[i]
  resultat.push(tab[i])
  if(resultat.length === 2){
      setTimeout(bonjour,1000)
  }
})};

function bonjour(){
    if(resultat[0] !== resultat[1]){
      for(let y=0;y<img.length;y++){
        if(img[y].alt === (resultat[0]) || img[y].alt === (resultat[1])){
          img[y].src = "img/dos.png"
          img[y].alt = ""
        }
      }
      resultat.length = 0
    }
    else {
      resultat.length = 0
    }
}

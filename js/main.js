// var init
var tab = ["as1.jpg","as2.png","as3.png","as4.png","as1.jpg","as2.png","as3.png","as4.png","2c.jpg","2carreau.png","2t.jpg","2c.jpg","2carreau.png","2t.jpg"]
var img = document.getElementsByTagName("img")

for(let i=0;i<img.length;i++){
img[i].addEventListener("click", function() {
  img[i].src = "img/" + tab[i]
})};

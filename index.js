
videosUrl= [
  "/assets/acqua_sul_fuoco.gif.mp4",
  "/assets/salare_pasta.gif.mp4",
  "/assets/pasta_in_acqua.gif.mp4",
  "/assets/secondo_passaggio.gif.mp4",
  "/assets/guanciale_cotto.gif.mp4",
  "/assets/rompere_uova.gif.mp4",
  "/assets/aggiunta_pecorino.gif.mp4",
  "/assets/mescolare_tutto.gif.mp4",
  "/assets/impiattamento.gif.mp4",
  "/assets/piatto_finale.gif.mp4"
]

counter = 0;

window.addEventListener("keyup", shortcut, false);



function shortcut(event) {
var video = document.getElementById('video'); //p
console.log(video.attributes.src.value);
  if (event.shiftKey && event.code === 'KeyP') {
    
    forward();
      

  } else if (event.shiftKey && event.code === 'KeyO') { //s
    
    backward();
  
  }
}

function forward(){
  counter ++;
  if(counter == videosUrl.length){
    counter = 0;
  }
  video.attributes.src.value = videosUrl[counter];
  video.load();
}

function backward(){
  counter --;
  if(counter == 0){
    counter = videosUrl.length-1;
  }
  video.attributes.src.value = videosUrl[counter];
  video.load();
}
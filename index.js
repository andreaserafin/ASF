var m = document.getElementById("eggs");

m.addEventListener("markerFound", (e)=>{
   console.log("found")
})

m.addEventListener("markerLost", (e)=>{
   console.log("lost")
})
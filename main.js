let bodybg = document.getElementById("bodybg");
const colourstart = document.getElementById("colour-start");
const colourend = document.getElementById("colour-end");
let startvalue = document.getElementById("startvalue");
let endvalue = document.getElementById("endvalue");

const ttop = document.getElementById("top");
const topright = document.getElementById("top-right");
const right = document.getElementById("right");
const bottomright = document.getElementById("bottom-right");
const bottom = document.getElementById("bottom");
const bottomleft = document.getElementById("bottom-left");
const left = document.getElementById("left");
const topleft = document.getElementById("top-left");

let direction = "";

//placeholders
const button = document.getElementById("button");
let gradientcode = document.getElementById("gradient-code")
gradientcode.value = "working?"



// colour picker functions
function pcolourstart() {
  startvalue.innerHTML = colourstart.value;
}

function pcolourend() {
  endvalue.innerHTML = colourend.value;
}

// colour picker event listeners
colourstart.addEventListener("input", pcolourstart);
colourend.addEventListener("input", pcolourend);

function topclick(){
  let pdirection = document.getElementById("pdirection")
  pdirection.innerHTML = "Selected gradient direction: to top";
  selection = "top";
  console.log(selection)
}

ttop.addEventListener("click", topclick);

bodybg.style.backgroundImage = 'linear-gradient(to top, #C0c0c0, #a8eb12)';

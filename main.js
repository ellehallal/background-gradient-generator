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



//placeholders / default values
const button = document.getElementById("button");
let gradientcode = document.getElementById("gradient-code")
gradientcode.value = "background-image: linear-gradient(to top, #EE6E73, #F6C503)"
let direction = "top";
let usergradient = 'linear-gradient(to ' + direction + ', ' + colourstart.value + ', ' + colourend.value + ')';



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
  direction = "top";
  console.log(direction)
}

// direction event listeners
ttop.addEventListener("click", topclick);

bodybg.style.backgroundImage = usergradient
// gradientcode = usergradient

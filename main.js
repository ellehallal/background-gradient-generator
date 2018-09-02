const colourstart = document.getElementById("colour-start");
const colourend = document.getElementById("colour-end");
// const colourstartvalue = colourstart.value
// const colourendvalue = colourstart.end

const ttop = document.getElementById("top");
const topright = document.getElementById("top-right");
const right = document.getElementById("right");
const bottomright = document.getElementById("bottom-right");
const bottom = document.getElementById("bottom");
const bottomleft = document.getElementById("bottom-left");
const left = document.getElementById("left");
const topleft = document.getElementById("top-left");

const button = document.getElementById("button");
let gradientcode = document.getElementById("gradient-code")
gradientcode.value = "working?"


function pcolourstart() {
  let startvalue = document.getElementById("startvalue");
  startvalue.innerHTML = colourstart.value;
}

function pcolourend() {
  let endvalue = document.getElementById("endvalue");
  endvalue.innerHTML = colourend.value;
}

colourstart.addEventListener("input", pcolourstart);
colourend.addEventListener("input", pcolourend);

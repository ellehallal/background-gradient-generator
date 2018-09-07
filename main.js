let bodybg = document.getElementById("bodybg");
const colourstart = document.getElementById("colour-start");
const colourend = document.getElementById("colour-end");
let startvalue = document.getElementById("startvalue");
let endvalue = document.getElementById("endvalue");
let pdirection = document.getElementById("pdirection")
let clipboardcopy = document.getElementById("clipboardcopy")

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

//textarea - code to be displayed
let gradientcode = document.getElementById("gradient-code")
gradientcode.value = "background-image: linear-gradient(to top, #EE6E73, #F6C503)"

//direction
let direction = "";

//// TODO: do i need this variable?
let usergradient = 'linear-gradient(to top, ' + colourstart.value + ', ' + colourend.value + ')';
bodybg.style.backgroundImage = usergradient


// TODO: remove this? Functions are inside event listeners
// colour picker functions
// function pcolourstart() {
//   startvalue.innerHTML = colourstart.value.toUpperCase();
// }
// function pcolourend() {
//   endvalue.innerHTML = colourend.value.toUpperCase();
// }

// colour picker event listeners
colourstart.addEventListener("input", function () {
  startvalue.innerHTML = colourstart.value.toUpperCase();
});

colourend.addEventListener("input", function () {
  endvalue.innerHTML = colourend.value.toUpperCase();
});


// direction event listeners
ttop.addEventListener("click", function () {
  pdirection.innerHTML = "Selected gradient direction: to top";
  direction = "top";
});

topright.addEventListener("click", function () {
  pdirection.innerHTML = "Selected gradient direction: to top right";
  direction = "top right";
});

right.addEventListener("click", function () {
  pdirection.innerHTML = "Selected gradient direction: bottom right";
  direction = "bottom right";
});

bottomright.addEventListener("click", function () {
  pdirection.innerHTML = "Selected gradient direction: to right";
  direction = "right";
});





//button click event listener - copies code to clipboard, background of document obj changes
button.addEventListener("click", function (){
  if(direction.length === 0){
    pdirection.classList.add("alert");
    pdirection.innerHTML = "Please select a direction";
    setTimeout(function(){
      pdirection.innerHTML = "";
      pdirection.classList.remove("alert");
    },4000);

  }
  else{
    usergradient = 'linear-gradient(to ' + direction + ', ' + colourstart.value + ', ' + colourend.value + ')';
    //body background colour change
    bodybg.style.backgroundImage = usergradient;
    //textarea
    gradientcode.value = 'background-image: linear-gradient(to ' + direction + ', ' + colourstart.value.toUpperCase() + ', ' + colourend.value.toUpperCase() + ')'
    // select and copy to clipboard
    gradientcode.select()
    document.execCommand('copy');
    // code copied to clipboard notification
    clipboardcopy.innerHTML = "code copied to clipboard";
    setTimeout(function(){
      clipboardcopy.innerHTML = "";},
      4000);
    direction = "";
    pdirection.innerHTML = ""
    }
})

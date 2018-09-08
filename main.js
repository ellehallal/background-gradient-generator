let bodybg = document.getElementById("bodybg");
const colourstart = document.getElementById("colour-start");
const colourend = document.getElementById("colour-end");
let startvalue = document.getElementById("startvalue");
let endvalue = document.getElementById("endvalue");
let pdirection = document.getElementById("pdirection");
let clipboardcopy = document.getElementById("clipboardcopy");

const ttop = document.getElementById("top");
const topright = document.getElementById("top-right");
const right = document.getElementById("right");
const bottomright = document.getElementById("bottom-right");
const bottom = document.getElementById("bottom");
const bottomleft = document.getElementById("bottom-left");
const left = document.getElementById("left");
const topleft = document.getElementById("top-left");

const button = document.getElementById("button");
const resetbutton = document.getElementById("resetbutton");

//textarea - code to be displayed
let gradientcode = document.getElementById("gradient-code");
gradientcode.value = "background-image: linear-gradient(to top, #EE6E73, #F6C503)";

//direction
let direction = "";


// colour picker event listeners
colourstart.addEventListener("input", function () {
  startvalue.innerHTML = colourstart.value.toUpperCase();
});

colourend.addEventListener("input", function () {
  endvalue.innerHTML = colourend.value.toUpperCase();
});



// direction event listeners
ttop.addEventListener("click", function () {
  direction = "top";
  pdirection.innerHTML = "Gradient direction: to " + direction;
});

topright.addEventListener("click", function () {
  direction = "top right";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

right.addEventListener("click", function () {
  direction = "right";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

bottomright.addEventListener("click", function () {
  direction = "bottom right";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

bottom.addEventListener("click", function () {
  direction = "bottom";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

bottomleft.addEventListener("click", function () {
  direction = "bottom left";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

left.addEventListener("click", function () {
  direction = "left";
  pdirection.innerHTML = "Gradient direction: to " + direction;

});

topleft.addEventListener("click", function () {
  direction = "top left";
  pdirection.innerHTML = "Gradient direction: to " + direction;
});


// reset button event listener
resetbutton.addEventListener("click", function () {
  direction = "";
  pdirection.innerHTML = "";
  colourstart.value = "#EE6E73";
  colourend.value = "#F6C503";
  startvalue.innerHTML = colourstart.value.toUpperCase();
  endvalue.innerHTML = colourend.value.toUpperCase();
  bodybg.style.backgroundImage = 'linear-gradient(to top, ' + colourstart.value + ', ' + colourend.value + ')';
  gradientcode.value = "background-image: linear-gradient(to top, #EE6E73, #F6C503)";
});


//button click event listener - copies code to clipboard, background of body changes
button.addEventListener("click", function (){
  if(direction.length === 0){
    pdirection.classList.add("alert");
    pdirection.innerHTML = "Please select a direction";
    setTimeout(function(){
      pdirection.innerHTML = "";
      pdirection.classList.remove("alert");
    },1000);

  }
  else{
    //body background colour change
    bodybg.style.backgroundImage = 'linear-gradient(to ' + direction + ', ' + colourstart.value + ', ' + colourend.value + ')';
    //textarea
    gradientcode.value = 'background-image: linear-gradient(to ' + direction + ', ' + colourstart.value.toUpperCase() + ', ' + colourend.value.toUpperCase() + ')';
    // select and copy to clipboard
    gradientcode.select();
    document.execCommand('copy');
    // code copied to clipboard notification
    clipboardcopy.innerHTML = "code copied to clipboard";
    setTimeout(function(){
      clipboardcopy.innerHTML = "";},
      4000);
    direction = "";
    pdirection.innerHTML = "";
    }
});

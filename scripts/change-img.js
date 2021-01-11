let pico = document.getElementById("pico");
let acro =  document.getElementById("acro");
let epilepsy = document.getElementById("epilepsy");

pico.addEventListener("mouseover", function(event) {
  console.log("je marche");
  document.imgCode.src="./images/code/pico1.png"
});
console.log("hello");
acro.addEventListener("mouseover", function(event) {
  document.imgCode.src="./images/code/acro1.png"
});

epilepsy.addEventListener("mouseover", function(event) {
  document.imgCode.src="./images/code/epilepsy-avion.png"
});

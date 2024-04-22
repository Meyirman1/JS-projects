const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const max = 100;
const min = 1;
let randomNumber

myBtn.onclick = function(){
 randomNumber = Math.floor(Math.random() *max) + min;
 myLabel.textContent = randomNumber;
}

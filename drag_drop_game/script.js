var audio = document.getElementById("audio");
audio.src = URL.createObjectURL("music.mp3");
audio.load();
audio.play()
function allowDrop(event){
	event.preventDefault();
}
function allowEnter(event){
	event.target.classList.add("over");
}
function allowLeave(event){
	event.target.classList.remove("over");
}
function dragStart(event){
	console.log("target:", event.target)
	console.log("id:", event.target.id)
	event.dataTransfer.setData("text", event.target.id);
}
function dragDrop(event) {
// console.log("event.target:",event.target)
// "event.target:" "<div id='square3' ondrop='dragDrop(event)' ondragover='allowDrop(event)'>square3</div>"
event.preventDefault();
// retrieve the data dragged
let data = event.dataTransfer.getData("text");
console.log("data: ",  data) //data: square1
let box = document.getElementById(data);
// container.style.marginLeft = " 10px";
  if(data == 'square'){
    alert('correct');
	event.target.appendChild(box);
  } else("try again!");
	if(data == 'circle'){
    alert('correct')
    event.target.appendChild(box);
  }
	if(data == 'rectangle'){
    alert('correct')
    event.target.appendChild(box);
  }
   if(data == 'trapezoid'){
    alert('correct')
    event.target.appendChild(box);
}
	if(data == 'oval'){
    alert('correct')
    event.target.appendChild(box);
}
// container.style.marginLeft = " 10px";
}
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
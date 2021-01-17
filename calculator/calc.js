let calcDisplay = document.getElementById("display");
console.log(calcDisplay.innerHTML);

let calcstr = ""



function my_f(button){
	calcstr = calcstr + button;
	calcDisplay.innerHTML = calcstr;
	console.log(calcDisplay);

}

function result(){
	let calcresult = eval(calcstr);
	calcDisplay.innerHTML = calcresult;
	console.log(calcresult);
}
function reset(){
	calcstr = " ";
	calcDisplay.innerHTML = 0;
}
function remove(){
	 if (calcDisplay.innerHTML.length > 1){
	 	calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1)
}else {calcDisplay.innerHTML = 0;
}
}




 function hangman(){
	var theword = prompt("Player 1: choose your secret word") // player inputs a word
	theword = theword.toLowerCase()   //forces lowercase to avoid errors
	var wordstar = []   //hides the word
	var try10 = 10   //10 tries
	var find = false   //boolean to set incorrect guess
	var wrongletters = []   //stores incorrect letters
	var remainletters = theword.length 
    
//convert word to stars with a for loop

	for(var i = 0; i < theword.length; i++){ 
		wordstar[i] = "*";  //iterate to stars
} console.log(wordstar)

//while loop for when remaining letters > 0 to continue guessing  
while(remainletters > 0){
var letterguess = prompt("give me a letter")
find == false //incorrect guess

if(try10 < 0){
	console.log("GAME OVER")
	alert("GAME OVER")
	break;

}else if(letterguess == null){  //if no more guesses the game starts again
break; 

}else if(letterguess.length !== 1) //tells player thats guessing to only guess one letter at a time
console.log("guess one letter at a time!")


} if(wrongletters.includes(letterguess) == true || wordstar.includes(letterguess) ==true){
	console.log("you have already guessed that letter! remaining guess" + try10)
	find == false
} else if(theword.includes(letterguess) == false && wordstar.includes(letterguess) == false){
try10 = try10  -1 //subtracts remaining guesses
find == false
wrongletters.push(letterguess)  //stores incorrect guesses
console.log("wrong letter, try again. remaining guesses" + try10)
console.log("previous guesses" + wrongletters)
}else{     //correct guesses
for(var j = 0; j < theword.length; j++){
	if(theword[j] == letterguess){     //j finds the position of each letter in theword
	wordstar[j] = letterguess;        //showes a correctly guessed letter (turns star to letter)	
	remainletters = remainletters -1
find = true;
console.log(wordstar)   //to output the correct guesses with the stars
	}                  
} 
if(find == false){
try10 = try10 -1     //makes chances decrease if "find" is false
}

}                  
if(remainletters == 0){
	find == false
	console.log("Congratulations!!!")
}
}

hangman()







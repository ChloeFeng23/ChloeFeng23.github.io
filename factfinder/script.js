 document.querySelector("#b1").addEventListener("click",changeDisplay1);

 function changeDisplay1(){
	document.getElementById("output").innerHTML = "The hottest spot on the planet is in Libya.<br> <img src='image/libya.jpg' alt='Libya'>";
}

document.querySelector("#b2").addEventListener("click",changeDisplay2);

function changeDisplay2(){
	document.getElementById("output").innerHTML = "The first oranges weren’t orange.<br><img src='image/orange.jpg' alt='Orange'>";
	
}

document.querySelector("#b3").addEventListener("click",changeDisplay3);

function changeDisplay3(){
	document.getElementById("output").innerHTML = 'Pineapple works as a natural meat tenderizer.<br>';
	
}

document.querySelector("#b4").addEventListener("click",changeDisplay4);

function changeDisplay4(){
	document.getElementById("output").innerHTML = 'The longest English word is 189,819 letters long.<br>';
	
}

document.querySelector("#b5").addEventListener("click",changeDisplay5);

function changeDisplay5(){
	document.getElementById("output").innerHTML = 'Humans are the only animals that blush.<br>';
	
}
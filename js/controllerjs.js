var imported = document.createElement('script');
imported.src = 'js/desenhajs.js';
document.head.appendChild(imported);


Main = {};
Main.WordArray = [];
Main.WordUArray= [];
Main.Lives = 6;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
};

Main.SetUnderline = function(){
	Main.PullWord();
	for(i = 0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join(" ");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;
};

function disableButton(letra) {
	document.getElementById(letra).disabled = true;

};

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for(i = 0; i < Main.Word.length;i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter ){
			Main.WordUArray[i] = letter;
			Main.Changes += 1;
			
		}
	}
	if(Main.Changes < 1 ){
		
		document.getElementById("lives").innerHTML = Main.Lives;
		
		if(Main.Lives == 6){
			desenhaCabeca();
			Main.Lives -= 1;
			document.getElementById("lives").innerHTML = Main.Lives;
		}
		else {
			if(Main.Lives == 5){
			desenhaCorpo();
			Main.Lives -= 1;
			document.getElementById("lives").innerHTML = Main.Lives;
			} else{
				if(Main.Lives == 4 ){
					desenhaBraco1();
					Main.Lives -= 1;
					document.getElementById("lives").innerHTML = Main.Lives;
				}
				else{
					if(Main.Lives == 3){
						desenhaBraco2();
						Main.Lives -= 1;
						document.getElementById("lives").innerHTML = Main.Lives;
					}
					else{
						if(Main.Lives == 2){
							desenhaPerna1();
							Main.Lives -= 1;
							document.getElementById("lives").innerHTML = Main.Lives;
						}
						else{
							if(Main.Lives == 1){			
								Main.Lives = 0;
								document.getElementById("lives").innerHTML = Main.Lives;
							}
						}
					}
				}
			}
		
		}
		
	}
	
	Main.WordU = Main.WordUArray.join(" ");
	document.getElementById("WORD").innerHTML = Main.WordU;
	Main.Word1 = Main.WordArray.join(" ");
	Main.Word2 =  Main.WordUArray.join(" ");
	
	if(Main.Word1 == Main.Word2){
		alert("You Won! Start a new game!");
		//window.location.reload();
	}
	
	if(Main.Lives < 1){
		desenhaPerna2();
		document.getElementById("WORD").innerHTML == Main.Word1;
		alert("You're DEAD, the word was: "+ Main.Word);
		
	}
	
};

Main.PullWord();
Main.SetUnderline();


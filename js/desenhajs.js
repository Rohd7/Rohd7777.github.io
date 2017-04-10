function desenhaForca(){
			
				var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(30,50); //começo da forca
				ctx.lineTo(30,300);
				ctx.lineTo(100,300)
				ctx.moveTo(30,50);
				ctx.lineTo(200,50);
				ctx.lineTo(200,100);
				ctx.moveTo(200,55);
				ctx.lineTo(30,55);
				ctx.moveTo(35,50);
				ctx.lineTo(35,300);
				ctx.moveTo(60,50);
				ctx.lineTo(30,70);
				ctx.stroke();
				ctx.closePath();
};

function desenhaCabeca(){
	
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(200,120,20,0,2*Math.PI);
ctx.stroke();
ctx.closePath;
	
};

function desenhaCorpo(){
	
	var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(200,140); 
				ctx.lineTo(200,200);
				
				ctx.stroke();
				ctx.closePath();
	
	
};

function desenhaBraco1(){
	
	var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(200,150); 
				ctx.lineTo(170,180);
				
				ctx.stroke();
				ctx.closePath();
	
	
};

function desenhaBraco2(){
	
	var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(200,150); 
				ctx.lineTo(230,180);
				
				ctx.stroke();
				ctx.closePath();
	
	
};

function desenhaPerna1(){
	
	var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(200,200); 
				ctx.lineTo(230,260);
				
				ctx.stroke();
				ctx.closePath();
	
	
};

function desenhaPerna2(){
	
	var canvas = document.getElementById("canvas");
				var ctx = canvas.getContext('2d');
				ctx.beginPath();
				ctx.moveTo(200,200); 
				ctx.lineTo(170,260);
				
				ctx.stroke();
				ctx.closePath();
	
	
};
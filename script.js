var selectedFont = "'Alfa Slab One', cursive;";
var selectedText = "";
function read(){
	if (document.getElementById('radio1').checked){selectedFont="'Press Start 2P', cursive;";}
	else if (document.getElementById('radio2').checked){selectedFont="'Alfa Slab One', cursive;";}
	selectedText = document.getElementById("message").value;

	document.getElementById("animation").removeAttribute("style");
	document.getElementById("proceedBtn").removeAttribute("style");
}
function setUp(){
	document.getElementById("settings").setAttribute("style", "display:none;");
	document.getElementById("messageBlock").setAttribute("style", "font-family: "+selectedFont);
	for (var i=0; i<=9000; i++){
		document.getElementById("messageBlock").innerHTML+=(selectedText+"     ");
	}		
	setInterval(showTime, 8);
}

function showTime(){
	document.getElementById("messageBlock").scrollBy(2, 0);
}
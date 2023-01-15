var selectedFont = "'Press Start 2P', cursive;";
var selectedText = "";
var selectedTextCopy = ""
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
	document.getElementById("messageBlock").innerHTML=selectedText;	
	setInterval(showTime, 250);
	selectedTextCopy = selectedText;
}

function showTime(){
	selectedText = selectedText.slice(1,selectedText.length);
	if(selectedText.length<1){selectedText=selectedTextCopy;}
	document.getElementById("messageBlock").innerHTML=selectedText;
}
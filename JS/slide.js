onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%3)+1; // 3 = nb images
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); // 3000 = 3 secondes
}
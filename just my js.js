colors=["navy","thistle","gold","lightgreen","brown","lightblue","pink","orange","grey"]
var timer=window.setInterval(changeColor, 10002);
function changeColor(){
	var n=Math.round(Math.random()*4);
	document.body.style.backgroundColor=colors[n];
	}
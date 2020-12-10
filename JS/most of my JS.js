colors=["navy","thistle","gold","lightgreen","brown","lightblue","pink","orange","grey","green","teal","red","purple","blue","yellow","hotpink"]
let timer=window.setInterval(changeColor, 10002);
function changeColor(){
	let n=Math.round(Math.random()*16);
	document.body.style.backgroundColor=colors[n];
	}

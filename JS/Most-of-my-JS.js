colors=["navy","thistle","gold","lightgreen","brown","lightblue","pink","orange","grey","green","teal","red","purple","blue","yellow","hotpink","peach","maroon","yellowgoldenrod","#d872c6","#cc9320","blanchedalmond","lightgoldenrodyellow","cornflowerblue","darkgoldenrod","chocolate","0, 102, 85, 0.71"]
let timer=window.setInterval(changeColor, 1002);
function changeColor(){
	let n=Math.round(Math.random()*26);
	document.body.style.backgroundColor=colors[n];
	}

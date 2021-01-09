colors=["navy","thistle","gold","lightgreen","brown","lightblue","pink","orange","grey","green","teal","red","purple","blue","yellow","hotpink","maroon","#d872c6","#cc9320","blanchedalmond","lightgoldenrodyellow","cornflowerblue","darkgoldenrod","chocolate","rgba(0, 102, 85, 0.71)"]
let timer=window.setInterval(changeColor, 1002);
function changeColor(){
	let n=Math.round(Math.random()*24);
	document.body.style.backgroundColor=colors[n];
	}



alert("Hi frome the SideFlipSa.ga devs!")
console.log('%c Wow, I did not think anyone would come back here!', 'color: #00ffe5; font-size: 18px');

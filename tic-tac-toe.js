function applyAttributes(){
	let boxes = document.getElementById("board").children;
	for( i = 0; i < boxes.length; i++){
		boxes[i].setAttribute("class", "square");
	}
	
}

window.onload = applyAttributes;
let clickCounter = 1;

function applyAttributes(){
    let boxes = document.getElementById("board").children;    
	for(let i = 0; i < boxes.length; i++){
		boxes[i].setAttribute("class", "square");
		boxes[i].setAttribute("id", i+1);
        boxes[i].setAttribute("type", "button");  
        boxes[i].addEventListener('click', click, false); 
        boxes[i].addEventListener('mouseover', mHover, false)  
        boxes[i].addEventListener('mouseleave', mLeave, false)
    }    
}

window.onload = applyAttributes;

function click(e){      
    if(e.target === e.currentTarget){
       let clickedItem = e.target.id;
       if (clickCounter % 2 === 0){
            document.getElementById(clickedItem).innerText = "O";
            document.getElementById(clickedItem).className = "square O";
            clickCounter += 1;
       }else{
            document.getElementById(clickedItem).innerText = "X";
            document.getElementById(clickedItem).className = "square X";
            clickCounter +=1 ;
       }         
    }       
}

function mHover(e){
    if(e.target === e.currentTarget){
        let mouseOverItem = e.target.id;
        document.getElementById(mouseOverItem).classList.add("hover");
    }    
}

function mLeave (e){
    if(e.target === e.currentTarget){
        let leftItem = e.target.id;
        document.getElementById(leftItem).classList.remove("hover");
    }
}
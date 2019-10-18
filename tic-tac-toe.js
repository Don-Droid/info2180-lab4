let clickCounter = 1;
let turn = '';

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
            //checkForWinner();
            turn = "X";
            let played = "O";
            clickCounter += 1;
            checkForWinner(played);
			//alert (turn);
       }else{
            document.getElementById(clickedItem).innerText = "X";
            document.getElementById(clickedItem).className = "square X";
           // checkForWinner();
            turn = "O";
            let played = "X";
            clickCounter +=1 ;
            checkForWinner(played);
			//alert (turn);
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

function checkForWinner(letter){
    let result = false;
    if (check(1, 2, 3, letter)||
        check(4, 5, 6, letter)||
        check(7, 8, 9, letter)||
        check(1, 5, 9, letter)||
        check(3, 5, 7, letter)||
        check(1, 4, 7, letter)||
        check(2, 5, 8, letter)||
        check(3, 6, 9, letter)){
            result = true;
        }
}

function check(a, b, c, letter){
    let result = false;
    if(getBox (a) == letter && getBox (b) == letter && getBox (c) == letter){
        result = true;
        document.getElementById("status").innerText = "Congratulations! " + letter + " is the Winner!";
        document.getElementById("status").classList.add("you-won");
    }
}

function getBox(number){
    return document.getElementById(""+number).innerText;
} 
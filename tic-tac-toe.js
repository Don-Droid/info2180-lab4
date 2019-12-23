let clickCounter = Math.ceil(Math.random() * 2); //Variable to keep track of the amount clicks made, starts with random number to decide who play first.

//This function apply the necessary attributes to display the squares.
function applyAttributes(){
    let boxes = document.getElementById("board").children;    
	for(let i = 0; i < boxes.length; i++){
		boxes[i].setAttribute("class", "square");
        boxes[i].setAttribute("id", i+1); 
        boxes[i].innerText = '';
        boxes[i].addEventListener('click', boxClick, false); 
        boxes[i].addEventListener('mouseover', mHover, false); 
        boxes[i].addEventListener('mouseleave', mLeave, false);    
    }
    document.getElementsByTagName("button")[0].addEventListener('click', buttonClick, false);
    document.getElementById("status").classList.remove("you-won");
    document.getElementById("status").innerText = "Move your mouse over a square and click to play an X or an O.";
}

//This function reset the game when the "New Game" button is clicked.
function buttonClick(){
    applyAttributes();
}

//apply attributes when windows load.
window.onload = applyAttributes;

//This function add specific classes to clicked items, keep track of the played letter, disallow cheating and check if there is a winner.  
function boxClick(e){      
    if(e.target === e.currentTarget){
       let clickedItem = e.target.id;
       if (clickCounter % 2 === 1 && document.getElementById(clickedItem).innerText === ''){
            document.getElementById(clickedItem).innerText = "O";
            document.getElementById(clickedItem).className = "square O";
            let played = "O";
            clickCounter += 1;
            checkForWinner(played);
       }else if (clickCounter % 2 === 0 && document.getElementById(clickedItem).innerText === ''){
            document.getElementById(clickedItem).innerText = "X";
            document.getElementById(clickedItem).className = "square X";
            let played = "X";
            clickCounter +=1 ;
            checkForWinner(played);
       } 
    }
           
}

//This function add the hover class on mouse over squares.
function mHover(e){
    if(e.target === e.currentTarget){
        let mouseOverItem = e.target.id;
        document.getElementById(mouseOverItem).classList.add("hover");
    }    
}

//This function add the hover class on mouse over squares.
function mLeave (e){
    if(e.target === e.currentTarget){
        let leftItem = e.target.id;
        document.getElementById(leftItem).classList.remove("hover");
    }
}

//This function takes in a played letter and check if there a row, column or diagonal line contains the played letter  
function checkForWinner(letter){
    if (check(1, 2, 3, letter)||
        check(4, 5, 6, letter)||
        check(7, 8, 9, letter)||
        check(1, 5, 9, letter)||
        check(3, 5, 7, letter)||
        check(1, 4, 7, letter)||
        check(2, 5, 8, letter)||
        check(3, 6, 9, letter)){
        }
}

function check(a, b, c, letter){
    let result = false;
    if(getBox (a) == letter && getBox (b) == letter && getBox (c) == letter){
        document.getElementById("status").innerText = "Congratulations " + letter + " is the Winner, Shauna remember Raldon loves you!";
        document.getElementById("status").classList.add("you-won");
    }
}

function getBox(number){
    return document.getElementById(""+number).innerText;
} 

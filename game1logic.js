let boxes = document.querySelectorAll(".check");
let resetbutton = document.querySelector("#reset");
let newbutton = document.querySelector("#newbtn");
let msg = document.querySelector("#win");
let msgcontainer = document.querySelector(".msgc");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{  
            box.innerText = "X";
            turnO = true;
         }
         box.disabled = true;
         checkWinner();
         
   });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    for(let boxe of boxes){
        boxe.disabled = true;
    }
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner", pos1val);
            showWinner(pos1val);
        }
        }   
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

resetbutton.addEventListener("click",resetGame);
newbutton.addEventListener("click",resetGame);
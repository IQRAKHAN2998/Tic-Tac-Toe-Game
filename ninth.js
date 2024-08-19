let boxes = document.querySelectorAll(".box")
let restbtn = document.querySelector("#rest-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


const restgame =()=>{
turnO = true;
enableboxes();
msgcontainer.classList.add("hide")
}

let turnO = true; // playerX , PLAYER O 
let arr = [["apple"], ["banan", "cherry"]]

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {    //PLAYERO
            box.innerText = "O"
            turnO = false
        } else {                   //PLAYERX
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkwinner()
    })
})
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}
const showwinner = (winner)=>{
    msg.innerText= `congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxes()
}
const checkwinner = () => {
    for (patterns of winpatterns) {
        let post1 = boxes[patterns[0]].innerText;       // innertext ye btayga k boxes k patterns
        let post2 = boxes[patterns[1]].innerText;      // k indexes k uper kia h mtlb o h ya x
        let post3 = boxes[patterns[2]].innerText;
         
        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 === post2 && post2 === post3) {
                console.log("WINNER" ,post1);
                
                showwinner(post1)
            }
        }
    }
}
newgamebtn.addEventListener("click",restgame);
restbtn.addEventListener("click",restgame)
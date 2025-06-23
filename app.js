let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let div = document.querySelector(".msg");
let wineer = document.querySelector("#winner");

let turn = true; // true = O, false = X

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn === true) {
            btn.innerText = "O";
            turn = false;
            btn.style.color = "purple";
        } else {
            btn.innerText = "X";
            turn = true;
            btn.style.color = "red";
        }
        btn.disabled = true;

        checkWinner();
    });
});

const disabledBtn = () => {
    for(let btn of btns) {
        btn.disabled = true;
    }
}

const enabledBtn = () => {
    for(let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (winner) => {
    wineer.innerText = `Congratulations , Winner is ${winner}`;
    div.classList.remove("hide");
    disabledBtn();
}

const checkWinner =() => {
    for(let pattern of winPattern) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

const resetGame = () => {
    turn = true;
    enabledBtn();
    div.classList.add("hide");
}

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
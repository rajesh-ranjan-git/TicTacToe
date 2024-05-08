let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new");
let reset = document.querySelector(".reset");
let win = document.querySelector(".win-container");
let winMsg = document.querySelector(".win p");
let counter = 0;
let temp = 0;
let turn = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const disableAll = () => {
    container.style.display = "none";
    reset.style.display = "none";
}

const checkWinner = (msg) => {
    for (pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winMsg.innerText = `${msg} won, Congratulations !`;
                win.style.display = "block";
                disableAll();
                return "Won";
            }
        }
    }
}

const draw = () => {
    if (win.style.display != "block" && counter == 9) {
        winMsg.innerText = "Draw !";
        win.style.display = "block";
        disableAll();
    }
}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if (counter != 9) {
            counter++;
            if (box.innerText == ""){
                if (turn == true) {
                    box.innerText = "X";
                    turn = false;
                    checkWinner(box.innerText);
                } else {
                    box.innerText = "O";
                    turn = true;
                    checkWinner(box.innerText);                    
                }
            } 
        }

        draw();
    });
});


newGame.addEventListener("click", () => {
    window.location.reload();
});

reset.addEventListener("click", () => {
    window.location.reload();
});
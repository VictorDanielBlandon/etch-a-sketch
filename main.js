// Global variable to store the current color
let color = 'black';

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16); // Initial board size

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        if (size) {
            createBoard(size);
        }
    });
});

function createBoard(size) {
    let board = document.querySelector(".board");

    // Clear previous board
    board.innerHTML = "";

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv); // Attach event listener
        board.appendChild(div);
    }
}

function getSize() {
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");

    if (input === "") {
        message.innerHTML = "Please provide a number";
        return null;
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100";
        return null;
    } else {
        message.innerHTML = "Now you play!";
        return input;
    }
}

function colorDiv() {
    // Generate a random color if "Random" is selected, else use black
    if (color === "Random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    // Set the global color variable based on button clicked
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
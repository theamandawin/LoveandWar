document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.querySelector(".chessboard");

    for (let i = 0; i < 8; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.classList.add((i + j) % 2 === 0 ? "white" : "black");
            square.classList.add("square");
            row.appendChild(square);
        }
        chessboard.appendChild(row);
    }

    // Add event listeners to display notations on hover
    const squares = document.querySelectorAll(".square");
    squares.forEach((square, index) => {
        const notation = String.fromCharCode(97 + (index % 8)) + (8 - Math.floor(index / 8));
        square.addEventListener("mouseover", () => {
            square.textContent = notation;
        });
        square.addEventListener("mouseout", () => {
            square.textContent = "";
        });
    });
});

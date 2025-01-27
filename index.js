const gridContainer = document.querySelector("#grid-container");

const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

const gridUnit = document.createElement("div");
gridUnit.classList.add("grid-unit");


//handles event of creation of boxes
const gridGenerator = document.querySelector("#grid-generator");
gridGenerator.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    gridRow.innerHTML = "";
    const inputNumber = prompt("Enter an integer");
    generateSquare(inputNumber);
    console.log(inputNumber);
}

)


function generateSquare(numberOfSquares) {

    // Creates a row of n divs. Grid dimension: 1 x n
    for (let i = 0; i < numberOfSquares; i++) {
        gridRow.appendChild(gridUnit.cloneNode(true));
    }
    //Multiplies the row of divs by n
    for (let i = 0; i < numberOfSquares; i++) {
        gridContainer.appendChild(gridRow.cloneNode(true));
    }
}



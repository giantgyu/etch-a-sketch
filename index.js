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
    let inputNumber;

    do {
        inputNumber = prompt("Enter an integer greater than 1 and less than or equal to 100:");

        // Convert the input to an integer
        inputNumber = parseInt(inputNumber);

        // Check if the input is a valid number and within the specified range
        if (isNaN(inputNumber) || inputNumber <= 1 || inputNumber > 100) {
            alert("Invalid input! Please enter an integer between 2 and 100.");
        }
    } while (isNaN(inputNumber) || inputNumber <= 1 || inputNumber > 100);


    generateSquare(inputNumber);
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
    const gridUnits = document.querySelectorAll(".grid-unit");

    gridUnits.forEach(gridUnit => {
        gridUnit.addEventListener("mouseover", () => {
            // Add color to the hovered unit
            gridUnit.style.opacity += 0.2;
        });
    });
}


generateSquare(16); git
const gridContainer = document.querySelector("#grid-container");

const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

const gridUnit = document.createElement("div");
gridUnit.classList.add("grid-unit");

const rgbToggler = document.querySelector("#rgb-toggler");
rgbToggler.addEventListener("click", toggleRGB);

// Function to generate a random pastel RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 128) + 128; // Ensure the red value is between 128 and 255
    const g = Math.floor(Math.random() * 128) + 128; // Ensure the green value is between 128 and 255
    const b = Math.floor(Math.random() * 128) + 128; // Ensure the blue value is between 128 and 255

    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color in the format rgb(r, g, b)
}

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
        //Uncomment to enable random rgb colored grids
        // gridUnit.style.backgroundColor = getRandomColor();

        gridUnit.addEventListener("mouseover", () => {
            // Add color to the hovered unit
            // Retrieve the current opacity value, default to 1 if not set
            let currentOpacity = parseFloat(gridUnit.style.opacity) || 0;

            // Add 0.1 to the current opacity
            let newOpacity = currentOpacity + 0.1;

            // Ensure the new opacity stays within the valid range of 0 to 1
            if (newOpacity > 1) {
                newOpacity = 1;  // Cap opacity at 1 (fully opaque)
            } else if (newOpacity < 0) {
                newOpacity = 0;  // Ensure opacity doesn't go below 0 (fully transparent)
            }

            // Set the new opacity value
            gridUnit.style.opacity = newOpacity;
        });
    });
}

// function toggleGrid() {
//     const gridUnits = document.querySelectorAll(".grid-unit");
//     gridUnits.forEach(gridUnit => {
//         if (gridUnit.style.border === "0.5px solid rgb(0, 0, 0)") {
//             gridUnit.style.border = "none";
//         } else {
//             gridUnit.style.border = "0.5px solid rgb(0, 0, 0)";
//         }
//     });
// }

let isRGBMode = false; // State variable to track if we're in RGB mode or not

function toggleRGB() {
    if (isRGBMode) {
        // If in RGB mode, reset the background color to a default (e.g., white)
        const gridUnits = document.querySelectorAll(".grid-unit");
        gridUnits.forEach(gridUnit => {
            gridUnit.style.backgroundColor = ''; // Reset to default background
        });
    } else {
        // If not in RGB mode, set random background color
        const gridUnits = document.querySelectorAll(".grid-unit");
        gridUnits.forEach(gridUnit => {
            gridUnit.style.backgroundColor = getRandomColor();
        });
    }

    // Toggle the state
    isRGBMode = !isRGBMode; // Flip the state
}

// Attach the event listener to the button
rgbToggler.addEventListener("click", toggleRGB);


generateSquare(16);
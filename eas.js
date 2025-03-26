const container = document.querySelector('.container');
const button = document.querySelector('#resetButton');
const clearButton = document.getElementById('clearGrid');
const containerSize = 512;

function create_grid(gridSize)
{
    container.innerHTML="";
    const squareSize = containerSize / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

function changeGridSize() {
    let newSize = parseInt(prompt("Enter grid size (1-100):"));

    // Validate input
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    create_grid(newSize);
}

function clearGrid(){
    document.querySelectorAll('.square').forEach(square => {
    square.style.backgroundColor = '';
}
)}
button.addEventListener('click', changeGridSize);
clearButton.addEventListener("click",clearGrid);
// Create default grid (16x16)
create_grid(16);

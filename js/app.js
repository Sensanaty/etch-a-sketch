/*jshint esversion: 6 */
const tablet = document.querySelector("#tabletContainer")

/**
 * Wait for DOM elements to load, then draw canvas of size 16x16.
 * @see blackOut() Enables drawing on the grid on DOM load.
 */
document.addEventListener("DOMContentLoaded", function () {
    drawGrid(16, 256);
    blackOut();
});

/**
 * Draw a Grid with gridSize number of Rows and Columns.
 * @param {number} gridSize How many Rows and Columns the drawing tablet will have
 * @param {number} gridTotal gridSize squared, the total dimensions of the canvas
 */
function drawGrid(gridSize, gridTotal) {
    for (let index = 0; index < gridTotal; index++) {
        div = document.createElement('div');
        div.setAttribute('class', 'tabletCanvas');
        tablet.appendChild(div);
    }
    tablet.setAttribute('style', `grid: repeat(${gridSize}, auto) / repeat(${gridSize}, auto)`);
}

/**
 * Removes each tabletCanvas div on the screen so that it can be reset to a blank canvas state.
 */
function removeGrid() {
    var gridBox = document.querySelectorAll(".tabletCanvas");
    gridBox.forEach((div) => {
        div.parentNode.removeChild(div);
    });
}

/**
 * On mouse hover over an element inside the canvas, set its background color to black.
 */
function blackOut() {
    let drawing = document.querySelectorAll(".tabletCanvas");
    drawing.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.setAttribute('style', 'background-color: black;');
        });
    });
}

/**
 * On mouse hover over an element inside the canvas, set its background color to a random RGB value.
 */
function rainbowOut() {
    let drawing = document.querySelectorAll(".tabletCanvas");
    drawing.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.setAttribute('style', `background-color: ${randomColors()};`);
        });
    });
}

/**
 * On mouse hover over an element inside the canvas, set its background color to white.
 */
function eraser() {
    let drawing = document.querySelectorAll(".tabletCanvas");
    drawing.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.setAttribute('style', 'background-color: white;');
        });
    });
}

/**
 * Return a random combination of RGB color values.
 */
function randomColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return (`rgb( ${red}, ${green}, ${blue});`);
}

// Buttons //

/**
 * Clear the drawing field when button is clicked and prompt the user for the size of the next canvas
 */
var clearButton = document.querySelector('#clearButton'); /** Set event listener for the reset button */
clearButton.addEventListener('click', function () {
    var gridPrompt = prompt('How large would you like your new grid to be? One side is enough');
    if (gridPrompt === null) {
        return;
    }
    var gridTotal = gridPrompt * gridPrompt;
    removeGrid();
    drawGrid(gridPrompt, gridTotal);
    blackOut();
});

/**
 * On button press, change the hover color from black to random RGB values.
 */
var rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener('click', function () {
    rainbowOut();
});

/**
 * On button press, change the hover color from whatever it is currently, back to black.
 */
var blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('click', function () {
    blackOut();
});

var eraseButton = document.querySelector('#eraseButton');
eraseButton.addEventListener('click', function () {
    eraser();
})
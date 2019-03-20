/*jshint esversion: 6 */
const tablet = document.querySelector("#tabletContainer")

/**
 * Wait for DOM elements to load, then draw canvas of size 16x16.
 * @see blackOut() Enables drawing on the grid on DOM load.
 */
document.addEventListener("DOMContentLoaded", function(){
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
 * On mouse hover over an element inside the canvas, set its background color to black.
 */
function blackOut() {
    let drawing = document.querySelectorAll(".tabletCanvas");
    drawing.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.setAttribute('style', 'background-color:black;');
        });
    });
}
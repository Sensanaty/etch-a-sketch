/*jshint esversion: 6 */
const gridContainer = document.querySelector("#tabletContainer");
var gridSize = 16;
gridContainer.setAttribute('style', 'grid: repeat(' + gridSize + ', auto) / repeat (' + gridSize + ', auto)');
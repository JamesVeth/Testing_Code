const gameArea = document.getElementById("gameArea");
const gameCanvas = document.querySelector("#gameCanvas");
ctx = gameCanvas.getContext("2d");

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");

ctx.fillStyle = boardBackground;
ctx.fillRect(0, 0, gameWidth, gameHeight);

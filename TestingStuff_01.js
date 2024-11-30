const gameArea = document.getElementById('gameArea');
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

let gameRunning = false;
let unitSize = 25;
let xVelocity = unitSize;
let foodX;
let foodY;
let score = 0;
let gameWidth = gameCanvas.getWidth;
let gameHeight = gameCanvas.getHeight;

let snake = [
    {x:unitSize*4,y:0},
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize*1,y:0},
    {x:0,y:0}
]

ctx.fillStyle = "lightgreen";
ctx.fillRect(0,0,gameCanvas.clientWidth,gameCanvas.clientHeight);

function createFood(){
    foodX = randomFood()
}

function randomFood(min, max) {


}

function clearBoard(){


}

function resetGame(){

}

function checkGameOver() {

}

function drawFood(){

}

function drawSnake(){

}

function changeDirection() {


}

function displayGameOver(){


}
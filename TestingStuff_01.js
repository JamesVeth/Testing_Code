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
    foodX = randomFood(0, gameWidth-unitSize); // 0 - 475
    foodY = randomFood(0, gameWidth-unitSize); // 0 - 475
}

function randomFood(min, max) {

    // 0.4 * 475 = 190
    // 190 / 25 = 7.6
    // Round 7.6; round means the lowest, closest integer, which is 7
    // 7 * 25 = 175
    // So we draw at 175, which is a divisible of 25, so the piece doesn't overlap

    let randNum = Math.round((Math.random() * (max-min) + min) / unitSize) * unitSize;
    return randNum;

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
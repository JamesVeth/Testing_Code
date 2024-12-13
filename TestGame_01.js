const canvasGame = document.querySelector("#canvasGame");
const divScore = document.querySelector("#divScore");
const buttonGame = document.querySelector("#buttonStart");
const ctx = canvasGame.getContext('2d');

const unitSize = 25;

let gameRunning = false;
let gameLoopId;
let running = false;
let snake = [ // Each element of the snake array = Object
    {x:unitSize*4, y:0}, // Head
    {x:unitSize*3, y:0},
    {x:unitSize*2, y:0},
    {x:unitSize*1, y:0},
    {x:0, y:0}
];
let gameWidth = canvasGame.width;
let gameHeight = canvasGame.height;

buttonGame.addEventListener("click", resetGame);

// console.log(snake[0]);
const snakeColor = "lightgreen";
const appleColor = "red";
const borderColor = "black";
const backgroundColour = "lightgrey"

function resetGame(){

    running = false;
    clearTimeout(gameLoopId); // clear the timeout, prevents it from repeatedly running when game starts
}

function moveSnake(){
    for(let i = 0; i < snake.length; i++){
        snake[i].x += unitSize;
        snake[i].y += unitSize;
    }

}

function gameStart(){
    gameRunning = true;
    nextTick();
}

function nextTick(){

    if (running){
        gameLoopId = setTimeout(()=>{
            clearBoard(); // clear frame before drawing
            moveSnake();
            drawSnake();
            checkGameOver()
            nextTick(); // recursion
        },75);
    }


}

function drawSnake(){

    ctx.fillStyle = "snakeColor";
    snake.forEach(snakeObjectElementParameter => {
        ctx.fillRect(snakeObjectElementParameter.x, snakeObjectElementParameter.y, unitSize, unitSize);
        ctx.strokeRect(snakeObjectElementParameter.x, snakeObjectElementParameter.y, unitSize, unitSize);
    });

}


function drawFood(){

}

function createFood(){


}

function checkGameOver() {


    
}

function clearBoard() {

    ctx.fillStyle = "backgroundColour";
    ctx.fillRect(0, 0, gameWidth, gameHeight);
    
}
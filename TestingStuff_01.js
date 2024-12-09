const gameCanvas = document.querySelector("#gameCanvas");
const ctx = gameCanvas.getContext('2d');
const labelScore = document.querySelector("#labelScore");
const buttonReset = document.querySelector("#buttonReset");

// Static variables
const gameWidth = gameCanvas.width;
const gameHeight = gameCanvas.height;
const backgroundColor = "white";
const appleColor = "red";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const unitSize = 25;

// Starting variables
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

let snake = [ // this is an array, that consists of 5 objects to start
    {x:unitSize*4,y:0}, // this is the head, at snake [0]
    {x:unitSize*3,y:0}, // the 
    {x:unitSize*2,y:0},
    {x:unitSize*1,y:0},
    {x:0,y:0}
]

// Start the Event Listeners (which esesentially run in a type of thread, continuously)
window.addEventListener("keydown", changeDirection);
buttonReset.addEventListener("click", resetGame);




function gameStart(){
    
    running = true;
    labelScore.textContent = score;
    createFood();
    drawFood();
    nextTick();

}

function nextTick(){
    if(running){
        // main game loop
        setTimeout(()=>{

            clearBoard(); // 1. Clear the board entirely before drawing the next frame
            drawFood(); // 2. Draw the food next, fillstyle and fillrect commands
            moveSnake(); // 3. Move the snake and determine if it has eaten or not, if it doesn't you pop the last snake part
            drawSnake(); // 4. Simple draw snake function, fillstyle and fillrect commands
            checkGameOver(); // 5. Check if the snake has collided with its self or the boundaries
            nextTick(); // 6. <--------- Recursively call this same function, which cycles the game loop, until running == false.
        }, 75); // 7. Pause for 75ms, before running this again

    } else {
        displayGameOver(); // If the game isn't running, it's in a game over state
    } 
}

function displayGameOver(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;
    clearBoard();
};

function createFood(){
    foodX = randomFood(0, gameWidth-unitSize); // 0 - 475
    foodY = randomFood(0, gameHeight-unitSize); // 0 - 475
}

function randomFood(min, max) {

    // 0.4 * 475 = 190
    // 190 / 25 = 7.6
    // Round 7.6; round means the lowest, closest integer, which is 7
    // 7 * 25 = 175
    // So we draw at 175, which is a divisible of 25, so the piece doesn't overlap

    let randNum = Math.floor(Math.random() * ((max - min) / unitSize)) * unitSize + min;
    return randNum;

}



function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;

    snake = [
        {x:unitSize*4,y:0},
        {x:unitSize*3,y:0},
        {x:unitSize*2,y:0},
        {x:unitSize,y:0},
        {x:0,y:0}
    ];
    
    gameStart();

}

function checkGameOver() {

    switch(true){

        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;     
    }

    // For loop to check if snake head is touching its body
    // start checking from 1 because the head is 0
    for(let i = 1; i < snake.length; i+=1){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            running = false;
        }

    }
    

}

function drawFood(){

    ctx.fillStyle = appleColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
    
}

function drawSnake(){
    
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;

    //foreach creates a temporary object, called snakeSegment, of each of the objects in snake, and does a ctx.fillRect using each of the object's coordinates.
    snake.forEach(snakeSegment=>{
        ctx.fillRect(snakeSegment.x, snakeSegment.y, unitSize, unitSize);
        ctx.strokeRect(snakeSegment.x, snakeSegment.y, unitSize, unitSize);
    })


}

function changeDirection(event) {

    const keyPressed = event.key;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);


    switch(true) {

        case (keyPressed == "ArrowUp" && !goingDown):
            yVelocity = -unitSize;
            xVelocity = 0;
            break;
        
        case (keyPressed == "ArrowDown" && !goingUp):
            yVelocity = unitSize;
            xVelocity = 0;
            break;
        
        case (keyPressed == "ArrowLeft" && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        
        case (keyPressed == "ArrowRight" && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        
    }   

}

function clearBoard(){

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0,0,gameWidth,gameHeight);

}



function moveSnake(){

    const head = {x:snake[0].x + xVelocity, 
                    y:snake[0].y + yVelocity}
    
    /*

    Arrays: Shift, Unshift, Push and Pop
    
    First Element:
    Unshift: Adds an element to the first element of the array and returns the new size of the array
    Shift: Removes an element from the first element of the array and returns the element it took
    
    Last Element:
    Push: Adds an element to the last element of the array and returns the new size of the array
    Pop: Removes an element from the last element of the array and returns the element it took

    First use an unshift to add the next head to the snake to give
    the impression it is moving by one piece
    
    Then check if it has touched a food and update score, etc

    If it hasn't eaten pop the end off the tail, if you don't do this
    the snake array would just keep growing infinitely
    */
    snake.unshift(head); //essentially we are overlapping the snake head here

    if(snake[0].x == foodX && snake[0].y == foodY) {
        score+=1; // remember to use = operator because we are assigning to score
        labelScore.textContent = score;
        createFood(); // generate and draw the next food location
        
    } else {
        snake.pop(); // remove last element of snake, and return value
    }
    
}




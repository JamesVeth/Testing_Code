const outerDiv = document.getElementById('gameArea');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    // Set canvas dimensions to match the outer div
    canvas.width = outerDiv.clientWidth;
    canvas.height = outerDiv.clientHeight;

    // Optional: Redraw or adjust content for high DPI
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Initial resize
resizeCanvas();

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);

const unitSize = 25;
let xVelocity = unitSize;
let running = false;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
]

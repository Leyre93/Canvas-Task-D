// Get canvas element and its 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 50);

// Draw a circle
ctx.beginPath();
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.stroke();

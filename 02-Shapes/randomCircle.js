window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // circle
  for (let i = 0; i < 200; i++) {
    createRandomCircle(context);
  }
});

function createRandomCircle(context) {
  const rad = Math.PI / 180;

  context.beginPath();
  context.beginPath();
  context.strokeStyle = 'red';
  context.fillStyle = 'red';
  context.lineJoin = 'round';
  context.arc(randomRange(0, 800),
    randomRange(0, 800),
    randomRange(0, 10),
    0, 360 * rad, false);
  context.stroke();
  context.fill();
}

function randomRange(start, end) {
  return Math.floor((Math.random() * end) + start);
}
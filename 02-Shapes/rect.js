window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // context.rect(x, y, width, height)
  context.beginPath();
  context.lineWidth = 10;
  context.lineJoin = 'round';
  context.fillStyle = 'blue';
  context.rect(50, 200, 200, 200);
  context.stroke(); // draw rect
  context.fill(); // fill rect

  // context.fillRect(x, y, width, height)
  context.fillStyle = 'yellow';
  context.fillRect(300, 200, 200, 300);

  // context.strokeRect(x, y, width, height)
  context.lineWidth = 3;
  context.strokeStyle = 'blue';
  context.lineJoin = 'square';
  context.strokeRect(500, 200, 200, 100);

  // context.clearRect(x, y, width, height)
  context.clearRect(0, 0, 800, 250); // create a plain rect
});
window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');
  const rad = Math.PI / 180;

  // shadowed rect
  context.beginPath();
  context.strokeStyle = 'yellow';
  context.fillStyle = 'yellow';
  context.shadowColor = 'rgb(0,0,0)';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.fillRect(200, 200, 400, 400);
  context.stroke();
  context.fill();
});
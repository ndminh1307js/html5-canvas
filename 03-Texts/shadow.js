window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // text shadow
  context.font = 'normal 600 40pt monospace';
  context.fillStyle = 'yellow';
  context.shadowColor = '#000000';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.fillText('This is shadow text', 100, 400);
  context.fill();
});
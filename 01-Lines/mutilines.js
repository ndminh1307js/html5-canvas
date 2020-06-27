window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const context = canvas.getContext('2d');

  // draw lines
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth = 5;

  context.moveTo(100, 100);
  context.lineTo(150, 120);
  context.lineTo(400, 400);
  context.lineTo(60, 70);
  context.lineTo(30, 30);

  context.stroke();
});
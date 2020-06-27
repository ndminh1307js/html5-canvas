window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const context = canvas.getContext('2d');

  // First line
  context.beginPath();
  context.lineCap = 'butt';
  context.lineJoin = 'miter';
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.shadowColor = 'blue';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.moveTo(100, 100);
  context.lineTo(500, 100);
  context.lineTo(700, 50);
  context.stroke();

  // Second line
  context.beginPath();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = 'green';
  context.lineWidth = 10;
  context.shadowColor = 'red';
  context.shadowOffsetX = -10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 5;
  context.moveTo(100, 200);
  context.lineTo(500, 200);
  context.lineTo(700, 150);
  context.stroke();

  // Third line
  context.beginPath();
  context.lineCap = 'square';
  context.lineJoin = 'bevel';
  context.strokeStyle = 'blue';
  context.lineWidth = 10;
  context.shadowColor = 'black';
  context.shadowOffsetX = -10;
  context.shadowOffsetY = -10;
  context.shadowBlur = 10;
  context.moveTo(100, 300);
  context.lineTo(500, 300);
  context.lineTo(700, 250);
  context.stroke();

});
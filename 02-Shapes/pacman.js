window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');
  const rad = Math.PI / 180;

  // body
  context.beginPath();
  context.strokeStyle = 'orange';
  context.fillStyle = 'orange';
  context.moveTo(250, 250);
  context.lineTo(330, 310);
  context.arc(250, 250, 100, 37 * rad, 323 * rad, false);
  context.stroke();
  context.fill();

  // eye
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(250, 200, 10, 0 * rad, 360 * rad, false);
  context.stroke();
  context.fill();
});
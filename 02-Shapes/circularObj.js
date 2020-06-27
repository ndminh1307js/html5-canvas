window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');
  const rad = Math.PI / 180;
  // context.arc(x, y, r, startAngle, endAngle, antiClosewiseDirection);
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.fillStyle = 'orange';
  context.arc(400, 400, 200, 135 * rad, 360 * rad, false);
  context.stroke();
  context.fill();
});
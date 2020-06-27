window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');
  const rad = Math.PI / 180;

  // Polygon variables
  const sides = 7, radius = 100,
    centerX = 200, centerY = 400,
    startAngle = 200,
    angle = (2 * Math.PI) / sides;

  // Start drawing
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.lineJoin = 'round';

  // Beginning point
  let beginX = centerX + radius * Math.cos(startAngle),
    beginY = centerX - radius * Math.sin(startAngle);

  context.moveTo(beginX, beginY);

  // draw lines
  for (let i = 1; i <= sides; i++) {
    // current point coordinates
    let currentAngle = startAngle + i * angle,
      currentPointX = centerX + radius * Math.cos(currentAngle),
      currentPointY = centerX - radius * Math.sin(currentAngle);

    // draw
    context.lineTo(currentPointX, currentPointY);
  }

  context.closePath(); // close paths manually
  context.stroke();
});
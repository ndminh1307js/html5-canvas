window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const context = canvas.getContext('2d');

  // // arc
  // context.beginPath();
  // context.strokeStyle = 'blue';
  // context.lineWidth = 10;
  // context.lineCap = 'round';
  // context.lineJoin = 'round';
  // context.arc(400, 400, 200, 0, Math.PI);
  // context.lineTo(600, 400);
  // context.moveTo(700, 400);
  // context.arc(400, 400, 300, 0, 2 * Math.PI);
  // context.moveTo(200, 250);
  // context.lineTo(300, 250);
  // context.moveTo(500, 250);
  // context.lineTo(600, 250);
  // context.stroke();

  // // arc wuth quadraticCurve
  // context.beginPath();
  // context.strokeStyle = 'blue';
  // context.lineWidth = 10;
  // context.lineCap = 'round';
  // context.lineJoin = 'round';
  // context.arc(400, 400, 200, 0, Math.PI);
  // context.lineTo(600, 400);
  // context.moveTo(700, 400);
  // context.arc(400, 400, 300, 0, 2 * Math.PI);
  // context.moveTo(200, 250);
  // context.quadraticCurveTo(250, 200, 300, 250);
  // context.moveTo(500, 250);
  // context.quadraticCurveTo(550, 200, 600, 250);
  // context.stroke();

  // arc with bezierCurveTo
  // context.beginPath();
  // context.strokeStyle = 'blue';
  // context.lineWidth = 10;
  // context.lineCap = 'round';
  // context.lineJoin = 'round';
  // context.arc(400, 400, 200, 0, Math.PI);
  // context.lineTo(600, 400);
  // context.moveTo(700, 400);
  // context.arc(400, 400, 300, 0, 2 * Math.PI);
  // context.moveTo(200, 250);
  // context.bezierCurveTo(220, 150, 280, 200, 300, 250);
  // context.moveTo(500, 250);
  // context.bezierCurveTo(520, 200, 580, 150, 600, 250);
  // context.stroke();

  // heart
  context.beginPath();
  // styles
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  // shadow
  context.shadowColor = 'black';
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 5;

  // path
  context.arc(300, 200, 100, Math.PI, 0);
  context.arc(500, 200, 100, Math.PI, 0);
  context.bezierCurveTo(600, 350, 500, 450, 400, 500);
  context.bezierCurveTo(300, 450, 200, 350, 200, 200);
  context.stroke();
});
window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // context.font = 'font-style font-weight font-size font-family'

  // context.fillText(text, x, y, maxWidth);
  context.font = 'italic 600 60px Noto Sans';
  context.fillStyle = 'green';
  context.fillText('Fill text on Canvas', 100, 100);
  context.fill();

  // context.strokeText(text, x, y, width)
  context.font = 'normal 300 50pt Verdana';
  context.strokeStyle = 'blue';
  context.strokeText('Stroke text on Canvas', 100, 400);
  context.stroke();
});
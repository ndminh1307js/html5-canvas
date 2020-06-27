window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  draw3DText('This text 3D', 100, 300,
    'normal 600 54px monospace', 'red', 10)

  function draw3DText(text, x, y, style, color, size) {
    context.font = style;
    context.fillStyle = 'black';
    for (var i = 0; i < size; i++) {
      context.fillText(text, x - i, y - i);
    }
    context.fillStyle = color;
    context.fillText(text, x, y);
  }
});
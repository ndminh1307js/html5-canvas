window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // colors
  const light = '#ffffff';
  const dark = '#333333';

  // Frame
  context.strokeStyle = '#000000';
  context.strokeRect(100, 100, 600, 600);
  context.stroke();

  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      if ((x + y) % 2 === 0) {
        context.fillStyle = dark;
      } else {
        context.fillStyle = light;
      }

      context.fillRect(x * 100 + 100, y * 100 + 100, 100, 100);
    }
  }
});
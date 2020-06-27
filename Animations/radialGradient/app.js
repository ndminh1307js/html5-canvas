window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const context = canvas.getContext('2d');

  // radial Gradient Circle
  let radialGradient = context.createRadialGradient(400, 400, 5, 400, 400, 400);
  radialGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  radialGradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.8)');
  radialGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)');
  radialGradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
  radialGradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');

  context.beginPath();
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = radialGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
});
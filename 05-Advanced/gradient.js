window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // Linear gradient
  const linearGradient = context.createLinearGradient(300, 100, 500, 100);
  // linearGradient.addColorStop(0, "red");
  // linearGradient.addColorStop(0.25, "blue");
  // linearGradient.addColorStop(0.5, "green");
  // linearGradient.addColorStop(0.75, "orange");
  // linearGradient.addColorStop(1, "white");
  linearGradient.addColorStop(0, 'purple');
  linearGradient.addColorStop(1, 'blue');

  // draw linear gradient rect
  context.strokeStyle = 'blue';
  context.lineWidth = 4;
  context.fillStyle = linearGradient;
  context.rect(300, 100, 200, 200);
  context.stroke();
  context.fill();

  // Radial Gradient
  const radialGradient = context.createRadialGradient(300, 600, 100, 400, 800, 200);
  radialGradient.addColorStop(0, "red");
  radialGradient.addColorStop(0.25, "blue");
  radialGradient.addColorStop(0.5, "green");
  radialGradient.addColorStop(0.75, "orange");
  radialGradient.addColorStop(1, "white");

  // draw radial gradient rect
  context.strokeStyle = 'blue';
  context.lineWidth = 4;
  context.fillStyle = radialGradient;
  context.rect(0, 0, 800, 800);
  context.stroke();
  context.fill();
});
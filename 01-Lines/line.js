window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.beginPath(); // reset context state
  context.strokeStyle = 'red'; // color
  context.lineWidth = 10; // thickness
  context.moveTo(30, 70); // starting point
  context.lineTo(130, 70); // end point
  context.stroke(); // draw
});
window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // context.textAlign = "center | end | left | right | start";
  // Specifies how text is aligned horizontally
  // The default value is "start"

  // context.textBaseline = "alphabetic | top | hanging | middle | ideographic | bottom";
  // Specifies how text is aligned vertically
  // The default value is "alphabetic"

  // Vertical Reference Line
  context.strokeStyle = 'red';
  context.moveTo(300, 20);
  context.lineTo(300, 430);
  context.stroke();

  // Define a style
  context.font = 'italic 400 18px monospace';

  // apply textAlign values
  context.textAlign = 'start';
  context.fillText('start', 300, 100);

  context.textAlign = 'end';
  context.fillText('end', 300, 150);

  context.textAlign = 'center';
  context.fillText('center', 300, 200);

  context.textAlign = 'left';
  context.fillText('left', 300, 250);

  context.textAlign = 'right';
  context.fillText('right', 300, 300);


  // Horizontal Reference Line
  context.strokeStyle = 'blue';
  context.moveTo(20, 500);
  context.lineTo(600, 500);
  context.stroke();

  // Apply textBaseline values
  context.textBaseline = 'alphabetic';
  context.fillText('alphabetic', 150, 500);

  context.textBaseline = 'top';
  context.fillText('top', 200, 500);

  context.textBaseline = 'hanging';
  context.fillText('hanging', 300, 500);

  context.textBaseline = 'middle';
  context.fillText('middle', 400, 500);

  context.textBaseline = 'bottom';
  context.fillText('bottom', 500, 500);
});
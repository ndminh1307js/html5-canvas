window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // context.createPattern(image, repetition)
  // repetition:
  // - repeat: both directions
  // - repeat-x: horizontal only
  // - repeat-y: vertical only
  // - no-repeat: neither

  const patternImage = new Image();
  patternImage.src = 'images/pikachu.png';

  patternImage.addEventListener('load', () => {
    const pattern = context.createPattern(patternImage, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, 800, 800);
  });
});
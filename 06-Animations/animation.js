window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  const tile = new Image();
  tile.src = 'images/tile.png';

  tile.addEventListener('load', () => {
    context.drawImage(tile, 0, 0, 768, 200, 16, 0, 768, 200);
  });

  const cellWidth = 192;
  const cellHeight = 200;

  function drawTileCell(index) {
    context.drawImage(tile, index * cellWidth, 0, cellWidth, cellHeight,
      360, 300, cellWidth, cellHeight);
  }

  window.requestAnimationFrame(animationLoop);

  let cell = 0;
  let start = new Date();

  function animationLoop() {
    let now = new Date();
    if (now - start >= 100) {
      start = now;
      // clear context
      context.clearRect(0, 200, canvas.width, canvas.height - 200);

      // update
      cell++;
      cell %= 4;

      // draw
      drawTileCell(cell);
    }
    // animate
    window.requestAnimationFrame(animationLoop);
  }

  const KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  window.addEventListener('keydown', (ev) => {
    switch (ev.keyCode) {
      case KEY_CODE.LEFT:
        console.log('Left');
        break;
      case KEY_CODE.UP:
        console.log('Up');
        break;
      case KEY_CODE.RIGHT:
        console.log('Right');
        break;
      case KEY_CODE.DOWN:
        console.log('Down');
        break;
    }
  })
});


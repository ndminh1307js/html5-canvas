window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // create random Int Number from start to (end - 1)
  function randomRange(start, end) {
    return Math.floor(Math.random() * end + start);
  }

  // create random rgba color
  function createRandomRGBAColor() {
    let r = randomRange(0, 255),
      g = randomRange(0, 255),
      b = randomRange(0, 255),
      a = randomRange(0, 255);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function Rect() {
    this.x = randomRange(0, canvas.width);
    this.y = randomRange(0, canvas.height);
    this.w = randomRange(0, 100);
    this.h = this.w;
    this.fillColor = createRandomRGBAColor();
    this.borderColor = createRandomRGBAColor();
  }

  Rect.prototype.draw = function () {
    context.beginPath();
    context.fillStyle = this.fillColor;
    context.strokeStyle = this.borderColor;
    context.rect(this.x, this.y, this.w, this.h);
    context.stroke();
    context.fill();
  }

  let start = new Date();
  function drawRandomColoredRect() {
    let now = new Date();
    if (now - start > 500) {
      let rect = new Rect();
      rect.draw();
      start = now;
    }

    window.requestAnimationFrame(drawRandomColoredRect);
  }

  // // Animate
  // window.requestAnimationFrame = (function () {
  //   return window.requestAnimationFrame
  //     || window.webkitRequestAnimationFrame
  //     || window.mozRequestAnimationFrame
  //     || window.msRequestAnimationFrame
  //     || function (callback) {
  //       window.setTimeout(callback, 1000 / 60);
  //     }
  // })();

  window.requestAnimationFrame(drawRandomColoredRect);
});

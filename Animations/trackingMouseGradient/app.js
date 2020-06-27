window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const context = canvas.getContext('2d');
  // canvas background
  context.fillStyle = '#222';
  context.fillRect(0, 0, canvas.width, canvas.height);

  const mouse = {};
  window.addEventListener('mousemove', (ev) => {
    mouse.x = ev.clientX;
    mouse.y = ev.clientY;
    // console.log(mouse);
  });

  let circles = [];
  for (let i = 0; i < 8; i++) {
    let c = new Circle(canvas.width / 2, canvas.height / 2, 150 * i, `rgba(255, 255, 255, ${0.2 / i})`);
    c.setContext(context);
    c.draw();
    circles.push(c);
  }


  // animate
  function animate() {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // update
    for (let i = 0; i < 8; i++) {
      circles[i].update(mouse);
    }

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
});

class Circle {
  constructor(x, y, r, color) {
    this.initial = { x, y, r };
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  setContext(context) {
    this.context = context;
  }

  update(mouseObj) {
    if (Object.keys(mouseObj).length > 0) {
      let deviationX = mouseObj.x - this.initial.x,
        deviationY = mouseObj.y - this.initial.y;

      this.x += 0.005 * deviationX;
      this.y += 0.005 * deviationY;

      if (this.x > this.initial.x + this.r + 100) {
        this.x = this.r + 100;
      } else if (this.x < this.initial.x - (this.r + 100)) {
        this.x = this.r - 100;
      }

      if (this.y > this.initial.y + this.r + 100) {
        this.y = this.r + 100;
      } else if (this.y < this.initial.y - (this.r + 100)) {
        this.y = this.r - 100;
      }
    }

    this.draw();
  }

  draw() {
    if (!this.context) {
      throw new Error('You must call setContext() before calling draw()');
    }

    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.context.fill();
  }
}
window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const context = canvas.getContext('2d');
  // canvas background
  context.fillStyle = '#222';
  context.fillRect(0, 0, canvas.width, canvas.height);

  let mouse = {};
  window.addEventListener('mousemove', (ev) => {
    mouse.x = ev.clientX;
    mouse.y = ev.clientY;
    // console.log(mouse);
  });

  window.addEventListener('mouseout', () => {
    mouse = {};
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
      circles[i].update(mouse, canvas);
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

  update(mouseObj, canvas) {
    if (Object.keys(mouseObj).length > 0) {
      if (mouseObj.x >= 0 && mouseObj.x < canvas.width) {
        this.r += 5;
      }

      if (this.r >= this.initial.r * 2) {
        this.r -= 5;
      } else if (this.r <= this.initial.r) {
        this.r = this.initial.r;
      }
    } else {
      this.r -= 5;
      if (this.r <= this.initial.r) {
        this.r = this.initial.r
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
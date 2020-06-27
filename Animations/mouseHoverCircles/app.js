window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const context = canvas.getContext('2d');

  // mouse move
  let mouse = {};
  window.addEventListener('mousemove', (ev) => {
    mouse.x = ev.clientX;
    mouse.y = ev.clientY;
  });

  // response canvas when window resize
  window.addEventListener('resize', (ev) => {
    canvas.height = ev.target.innerHeight;
    canvas.width = ev.target.innerWidth;
  });

  // create circles
  const circleArray = [];

  for (let i = 0; i < 400; i++) {
    let elem = new Circle(
      x = createRandomInt(0, canvas.width),
      y = createRandomInt(0, canvas.height),
      r = createRandomInt(2, 5),
      dx = createRandomChoice([-0.5, 0.5]),
      dy = createRandomChoice([-0.5, 0.5]),
      color = createRandomColor()
    );
    elem.setContext(context);
    elem.draw();
    circleArray.push(elem);
  }

  function animate() {
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // update
    for (let i = 0; i < 400; i++) {
      circleArray[i].update(mouse);
    }

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
});

// Circle
class Circle {
  constructor(x, y, r, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.initialR = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  setContext(context) {
    this.context = context;
  }

  update(mouseObject) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < this.r || this.x > canvas.width - this.r) {
      this.dx *= -1;
    }

    if (this.y < this.r || this.y > canvas.height - this.r) {
      this.dy *= -1;
    }

    if (Object.keys(mouseObject).length > 0
      && (Math.abs(mouseObject.x - this.x) < 60
        && Math.abs(mouseObject.y - this.y) < 60)) {
      this.r += 1;
      if (this.r > 40) {
        this.r = 40;
      }
    } else {
      this.r = this.initialR;
    }

    this.draw();
  }

  draw() {
    if (!this.context) {
      throw new Error('Set the context before drawing.Using setContext(context) method');
    }
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.context.stroke();
    this.context.fill();
  }
}

// Helper Functions
function createRandomInt(start, end) {
  return Math.floor(Math.random() * end + start);
}

function createRandomColor() {
  const colors = ['#fdd835', '#f44336', '#1976d2', '#00796b', '#616161'];
  return colors[createRandomInt(0, colors.length)];
}

function createRandomChoice(choices) {
  return choices[createRandomInt(0, choices.length)];
}
window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = 800;
  canvas.width = 800;

  const context = canvas.getContext('2d');

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

  let img = new Image();
  img.src = 'images/dungct.png';

  img.addEventListener('load', () => {
    context.drawImage(img, 0, 0, 512, 512, 100, 100, 600, 600);

    let imageData = context.getImageData(100, 100, 600, 600);
    console.log(imageData);

    for (let i = 0; i < imageData.data.length; i += 10) {
      let average = (imageData[i] + imageData[i + 1] + imageData[i + 2]) / 3;
      if ((i / 10) % 2 === 0) {
        imageData.data[i] = average; // r
        imageData.data[i + 1] = average; // g
        imageData.data[i + 2] = average; // b
        imageData.data[i + 3] = 80; // alpha
      }
    }

    context.putImageData(imageData, 100, 100);
  })
});
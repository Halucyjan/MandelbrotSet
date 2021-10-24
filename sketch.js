function setup() {
  createCanvas(400, 400);
   slider1 = createSlider(0, 2, 2, 0.1)
   slider2 = createSlider(-2, 2, 0, 0.1)
    slider3 = createSlider(-2, 2, 0, 0.1)
  //noLoop();
  frameRate(10);
}

function draw() {
  //background(220);
   pixelDensity(1);

    let val1 = slider1.value();
    let val2 = slider2.value();
    let val3 = slider3.value();

  loadPixels();
  for (var x = 0; x < width; x++)
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, -val1+val2,val1+val2)
      var b = map(y, 0, height, -val1+val3, val1+val3);

      var ca = a;
      var cb = b;

      var n = 0;
      var z;

      while (n < 100) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (a * a + b * b > 16) {
          break;
        }

        n++;
      }

      var bright = 0//map(n, 0, val1, 0, 1);
      if (n === 100) {
        bright = 255;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
updatePixels();
}
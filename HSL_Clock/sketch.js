let lastMilis;
let curMilis;
let elapse;
let h;
let s;
let l;

let lSwitch = -1;  
let sSwitch = -1;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);

  h = random(0, 360);  
  s = random(0, 100);  
  l = random(0, 100);  

  background(h, s, l);
  lastMilis = millis();
}

function draw() {
  curMilis = millis();
  elapse = curMilis - lastMilis;

  l += (elapse / 100) * lSwitch;  
  
  if (l > 100 || l < 0) {
    lSwitch *= -1;  
    s += sSwitch * 1;  
  }

  if (s > 100 || s < 0) {
    sSwitch *= -1;  
    h += 1;  
  }

  if (h > 360) {
    h = 0;
  }

  background(h, s, l);

  let hText = `(  ${floor(h)},`;
  let sText = `${floor(s)}%,`;
  let lText = `${floor(l)}%  )`;
  
  push();
  noStroke(); 
  fill(150);
  rect(width/48, height*13.65 /30, width* 46/48, 18)
  pop();


  textSize(14);
  text(hText, width*0.5/20, height*14 /30 );
  text(sText, width / 2, height*14 /30);
  text(lText, width*45.3/48, height*14 /30);


  lastMilis = curMilis;
}

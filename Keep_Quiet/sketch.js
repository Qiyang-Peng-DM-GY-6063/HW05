let lastMilis;
let curMilis;
let elapse;
let h;
let s;
let l;
let countDown;
let interval;
let lastTriggered = -1;

let lSwitch = -1;  
let sSwitch = -1;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);
  textAlign(CENTER, CENTER);

  interval = 30;
  h = random(0, 360);  
  s = random(0, 100);  
  l = random(0, 100);  

  countDown = h * 10000 + s * 100 + l;

  background(h, s, l);
  lastMilis = millis();
}

function draw() {
  curMilis = millis();
  elapse = curMilis - lastMilis;

  l += (elapse / 1000) * lSwitch;  
  countDown -= elapse / 1000;
  
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

  let qText = `Keep Quiet for ${floor(countDown)} Seconds`;

  textSize(32);
  text(qText, width / 2, height / 2);
  lastMilis = curMilis;

  let currentCountDown = floor(countDown / interval);
  if (currentCountDown !== lastTriggered) {
    readText("This is a quiet room, please don't make any noise for " + floor(countDown) + " seconds");
    lastTriggered = currentCountDown;
  }
}

function readText(text) {
  let speech = new SpeechSynthesisUtterance(text);  
  speech.lang = 'en-US'; 
  window.speechSynthesis.speak(speech);  
}

function mousePressed() {
  readText("This is a quiet room, please don't make any noise for " + floor(countDown) + " seconds");
}

/***********************************************************************************
	Mood States
  by An Duong

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

var strings = [];
var midX;
var startY;
var lineHeight = 50;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/restless.png');
  images[1] = loadImage('assets/mellow.png');
  images[2] = loadImage('assets/excited.png');
  images[3] = loadImage('assets/happy.png');
  images[4] = loadImage('assets/anxious.png');
  images[5] = loadImage('assets/wave.png')
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(32);
  textFont('Futura');

  // set to wave for startup
  drawFunction = drawWave;

}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(50,150,150);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
  background(200,200,100);
  image(images[0],width/2, height/2);

  fill(0,0,0);
  text("RESTLESS", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
  background(0,150,150);
  image(images[1],width/2, height/2 - 20);

  fill(140,200,0);
  text("MELLOW", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
  background(250,150,120);
  image(images[2],width/2, height/2);

  fill(80,120,150);
  text("EXCITED", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
  background(100,200,100);
  image(images[3],width/2, height/2);

  fill(255,255,178);
  text("HAPPY", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
  background(30,80,130);
  image(images[4],width/2, height/2 - 30);

  fill(200,80,50);
  text("ANXIOUS ", width/2, height - gTextOffset);
}

//-- drawWave() will draw the image at index 4 from the array
drawWave = function() {

  image(images[5],width/2, height/2);
  drawTitle();
}

drawInstructions = function() {

  background(20, 180, 130);

  fill(255);
  for ( let i = 0; i < strings.length; i++ ){
    text( strings[i], midX, startY + (i * lineHeight) );
  }

  loadStringArray();
}


function loadStringArray(){
  strings[0] = "☆     hello     ☆ ";
  strings[1] = "to begin";
  strings[2] = "click anywhere with your mouse! ";
  strings[3] = "to go through different images";
  strings[4] = "press key numbers: 1-5";
  strings[5] = "to go back to the first page";
  strings[6] = "press key 's'";
  strings[7] = "to get back to this instructions page";
  strings[8] = "press key 'i'";
}


drawTitle = function() {

  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseX / width)*72);
  text("how are you feeling ...? what's the mood...?", width/2, 150);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
    drawFunction = drawOne;
  }
  else if( key === '2' ) {
    drawFunction = drawTwo;
  }
  else if( key === '3' ) {
    drawFunction = drawThree;
  }
  else if( key === '4' ) {
    drawFunction = drawFour;
  }
  else if( key === '5' ) {
    drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawWave;
  }

  else if( key === 'i' ) {
    drawFunction = drawInstructions;
  }
}

function mousePressed() {
  // only change state if we are in wave screen
  // change to instructions page
  if( drawFunction == drawWave ) {
    drawFunction = drawInstructions;
  }
}

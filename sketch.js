/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall

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

// load all images into an array
function preload() {
  images[0] = loadImage('assets/restless.png');
  images[1] = loadImage('assets/mellow.png');
  images[2] = loadImage('assets/excited.png');
  images[3] = loadImage('assets/happy.png');
  images[4] = loadImage('assets/anxious.png');
  images[5] = loadImage('assets/splash.png')
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
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

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

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
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction == drawSplash ) {
    drawFunction = drawOne;
  }
}
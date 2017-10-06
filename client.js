console.log('script sourced.');

$('document').ready(onReady);

function onReady() {
  console.log('document ready');
  addBlocks();
  countBlocks();
}

function addBlocks() {
  $('#red-button').on('click', addRedBlock);
  $('#yellow-button').on('click', addYellowBlock);
  $('#green-button').on('click', addGreenBlock);
  $('#blue-button').on('click', addBlueBlock);
}

function countBlocks() {
  $('#red-button').on('click', redColorCounter);
  $('#yellow-button').on('click', yellowColorCounter);
  $('#green-button').on('click', greenColorCounter);
  $('#blue-button').on('click', blueColorCounter);
}

function addRedBlock() {
  var $redBlock = $('<div id = "Red-block"></div>');
  $('.main').append($($redBlock));
}

function addYellowBlock() {
var $yellowBlock = $('<div id = "Yellow-block"></div>');
$('.main').append($($yellowBlock));
}

function addGreenBlock() {
var $greenBlock = $('<div id = "Green-block"></div>');
$('.main').append($($greenBlock));
}

function addBlueBlock() {
var $blueBlock = $('<div id = "Blue-block"></div>');
$('.main').append($($blueBlock));
}

var redButtonCount = 0;
var yellowButtonCount = 0;
var greenButtonCount = 0;
var blueButtonCount = 0;

function redColorCounter() {
  redButtonCount += 1;
  $('#red-clicks').html(redButtonCount);
}

function yellowColorCounter() {
  yellowButtonCount += 1;
  $('#yellow-clicks').html(yellowButtonCount);
}

function greenColorCounter() {
  greenButtonCount += 1;
  $('#green-clicks').html(greenButtonCount);
}

function blueColorCounter() {
  blueButtonCount += 1;
  $('#blue-clicks').html(blueButtonCount);
}


/* What I need to do:
- In the count space, add one to the total count for that number.
- On click of the red button, add one
- Should start with 0 in each box



*/

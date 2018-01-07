var videoSources = ['godfather2.mp4', 'GranTorino.mp4'];
var button1Location = document.getElementById('button1');
var nextButton = document.getElementById('button1');
var vidLocation = document.getElementById('vid');
var tvLocation = document.getElementById('tv');
var allSlides = document.getElementsByClassName('slideShow');
var slide1Location = document.getElementById('slide1');
var slide2Location = document.getElementById('slide2');

var counter = 0;

button1Location.addEventListener('click', countNumber);
button1Location.addEventListener('click', nextQuestion);

function countNumber() {
  counter++;
  if (counter == 1) {
    vidLocation.src = videoSources[0];
  } else if (counter == 2) {
    vidLocation.src = videoSources[1];
  }
  vidLocation.play();
}

function nextQuestion() {
  tvLocation.style.background = 'black';
  vidLocation.style.opacity = 1;
  slide1Location.style.display = 'block';
  button1Location.innerText = 'Next';
  cantGoYet();
}

function cantGoYet() {
  var radioLocation = document.querySelectorAll('input').name == 'question1';
  if (radioLocation.checked == true) {
    button1Location.style.display = 'none';
  } else if (radioLocation.checked == false)
    button1Location.style.display = 'block';
}

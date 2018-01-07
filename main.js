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
button1Location.addEventListener('click', cantGoYet);

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
}
('input[name$="value"]');

function cantGoYet() {
  var radioLocation = document.querySelectorAll('input');
  var question1answers = document.getElementsByClassName('question1');

  if (
    question1answers[0].checked !== true &&
    question1answers[1].checked !== true &&
    question1answers[2].checked !== true &&
    question1answers[3].checked !== true
  ) {
    console.log('hmmm');
  } else {
    console.log('okkkkk');
  }
}

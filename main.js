var button1Location = document.getElementById('button1');
var button2Location = document.getElementById('button2');
var allBuutons = document.getElementsByClassName('play');
var vid1Location = document.getElementById('vid1');
var vid2Location = document.getElementById('vid2');
var tvLocation = document.getElementById('tv');
var slide1Location = document.getElementById('slide1');
var slide2Location = document.getElementById('slide2');

button1Location.addEventListener('click', playGF2);

function playGF2() {
  tvLocation.style.background = 'black';
  vid1Location.style.opacity = 1;
  vid1Location.play();
  slide2Location.style.display = 'none';
  slide1Location.style.display = 'block';
  button2Location.removeEventListener('click', playGT);
}

button2Location.addEventListener('click', playGT);

function playGT() {
  tvLocation.style.background = 'black';
  vid2Location.style.opacity = 1;
  vid2Location.play();
  slide1Location.style.display = 'none';
  slide2Location.style.display = 'block';
  button1Location.removeEventListener('click', playGF2);
}

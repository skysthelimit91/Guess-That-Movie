var button1Location = document.getElementById('button1');
var button2Location = document.getElementById('button2');
var vid1Location = document.getElementById('vid1');
var vid2Location = document.getElementById('vid2');
var tvLocation = document.getElementById('tv');

button1Location.addEventListener('click', playGF2);

function playGF2() {
  tvLocation.style.background = 'black';
  vid1Location.style.opacity = 1;
  vid1Location.play();
  button2Location.removeEventListener('click', playGT);
}

button2Location.addEventListener('click', playGT);

function playGT() {
  tvLocation.style.background = 'black';
  vid2Location.style.opacity = 1;
  vid2Location.play();
  button1Location.removeEventListener('click', playGF2);
}

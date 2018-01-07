var videoSources = ['godfather2.mp4', 'GranTorino.mp4', 'goodwillhunting.mp4'];
var button1Location = document.getElementById('button1');
var button2Location = document.getElementById('button2');
var nextButton = document.getElementById('button1');
var vidLocation = document.getElementById('vid');
var tvLocation = document.getElementById('tv');
var allSlides = document.getElementsByClassName('slideShow');
var slide1Location = document.getElementById('slide1');
var slide2Location = document.getElementById('slide2');

var counter = 0; //I use this counter throughout my code in order to let my functions know when (on which slide) they
//need to execute certain code
button1Location.addEventListener('click', countNumber);
button1Location.addEventListener('click', nextQuestion);
button2Location.addEventListener('click', cantGoYet); //My submit button only needs to be able to have access to this one function
button1Location.addEventListener('click', cantGoYet); //because I don't want it increasing my counter when clicked

function countNumber() {
  //everytime the 'Next' button is clicked, a counter is incremented by 1. When the
  counter++; //counter is equal to certain numbers, the source for the video element will change
  if (counter == 1) {
    vidLocation.src = videoSources[0];
  } else if (counter == 2) {
    vidLocation.src = videoSources[1];
  } else if (counter == 3) {
    vidLocation.src = videoSources[2];
  }
  vidLocation.play(); //this will play whatever the source file for video element is at the time this is invoked.
}

function nextQuestion() {
  //this is a similar function to the one above, however instead of changing the source for the
  // video element, this function changes which div is showing at the moment by
  vidLocation.style.opacity = 1; // setting the previous divs to display none
  tvLocation.style.background = 'black'; // and the current div to display block. Each div holds a different
  button1Location.innerText = 'Next'; // question and answer set. This function also gives my video
  //a sort of "cut scene" effect and changes the text of my start button to next once clicked.
  for (var i = 0; i < allSlides.length; i++) {
    if (counter == 1) {
      allSlides[0].style.display = 'block';
    } else if (counter == 2) {
      allSlides[1].style.display = 'block';
      allSlides[0].style.display = 'none';
    } else if (counter == 3) {
      allSlides[2].style.display = 'block';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    }
  }
}

function cantGoYet() {
  var radioLocation = document.querySelectorAll('input');
  var question1answers = document.getElementsByClassName('question1');
  var question2answers = document.getElementsByClassName('question2');
  var question3answers = document.getElementsByClassName('question3');

  if (counter == 1) {
    if (
      question1answers[0].checked == false && //This function is looking though all the radio buttons for the first question
      question1answers[1].checked == false && // and if there is no button selected, it is hiding my next button so the user can't
      question1answers[2].checked == false && //proceed until they make a selection
      question1answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block'; //otherwise, my next button is displayed and the user can proceed to the next question
      if (question1answers[3].checked == true) {
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
    }
  } else if (counter == 2) {
    if (
      question2answers[0].checked == false && // I simply repeat these steps for each number of the counter
      question2answers[1].checked == false && // (again, each number representing a different slide)
      question2answers[2].checked == false &&
      question2answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
    }
  } else if (counter == 3) {
    if (
      question3answers[0].checked == false &&
      question3answers[1].checked == false &&
      question3answers[2].checked == false &&
      question3answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
    }
  }
}

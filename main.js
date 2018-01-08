var videoSources = [
  'godfather2.mp4',
  'GranTorino.mp4',
  'goodwillhunting.mp4',
  'Terminator2.mp4',
  'demolitionman.mp4',
  'Rushhour.mp4',
  'Independence.mp4',
  'Goodfellas.mp4',
  'princess.mp4',
];
var button1Location = document.getElementById('button1');
var button2Location = document.getElementById('button2');
var nextButton = document.getElementById('button1');
var vidLocation = document.getElementById('vid');
var tvLocation = document.getElementById('tv');
var allSlides = document.getElementsByClassName('slideShow');
var tryAgainLocation = document.getElementById('tryAgain');

var counter = 0; //I use this counter throughout my code in order to let my functions know when (on which slide) they
//need to execute certain code
var scoreCounter = 0; //This counter is strictly used for incrementing points earned when a user answers correctly
var wrongCounter = 0;
button1Location.addEventListener('click', countNumber);
button1Location.addEventListener('click', nextQuestion);
button2Location.addEventListener('click', cantGoYet); //My submit button only needs to be able to have access to this one function
button1Location.addEventListener('click', cantGoYet); //because I don't want it increasing my counter when clicked
tryAgainLocation.addEventListener('click', backHome); // This try again button reloads the document, thereby starting the game over

function countNumber() {
  //everytime the 'Next' button is clicked, a counter is incremented by 1. When the
  counter++; //counter is equal to certain numbers, the source for the video element will change
  if (counter == 1) {
    vidLocation.src = videoSources[0];
  } else if (counter == 2) {
    vidLocation.src = videoSources[1];
  } else if (counter == 3) {
    vidLocation.src = videoSources[2];
  } else if (counter == 4) {
    vidLocation.src = videoSources[3];
  } else if (counter == 5) {
    vidLocation.src = videoSources[4];
  } else if (counter == 6) {
    vidLocation.src = videoSources[5];
  } else if (counter == 7) {
    vidLocation.src = videoSources[6];
  } else if (counter == 8) {
    vidLocation.src = videoSources[7];
  } else if (counter == 8) {
    vidLocation.src = videoSources[7];
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
    } else if (counter == 4) {
      allSlides[3].style.display = 'block';
      allSlides[2].style.display = 'none';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    } else if (counter == 5) {
      allSlides[4].style.display = 'block';
      allSlides[3].style.display = 'none';
      allSlides[2].style.display = 'none';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    } else if (counter == 6) {
      allSlides[5].style.display = 'block';
      allSlides[4].style.display = 'none';
      allSlides[3].style.display = 'none';
      allSlides[2].style.display = 'none';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    } else if (counter == 7) {
      allSlides[6].style.display = 'block';
      allSlides[5].style.display = 'none';
      allSlides[4].style.display = 'none';
      allSlides[3].style.display = 'none';
      allSlides[2].style.display = 'none';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    } else if (counter == 8) {
      allSlides[7].style.display = 'block';
      allSlides[6].style.display = 'none';
      allSlides[5].style.display = 'none';
      allSlides[4].style.display = 'none';
      allSlides[3].style.display = 'none';
      allSlides[2].style.display = 'none';
      allSlides[1].style.display = 'none';
      allSlides[0].style.display = 'none';
    }
  }
}

function cantGoYet() {
  var radioLocation = document.querySelectorAll('input');
  var soundLocation = document.querySelector('audio');
  var question1answers = document.getElementsByClassName('question1');
  var question2answers = document.getElementsByClassName('question2');
  var question3answers = document.getElementsByClassName('question3');
  var question4answers = document.getElementsByClassName('question4');
  var question5answers = document.getElementsByClassName('question5');
  var question6answers = document.getElementsByClassName('question6');
  var question7answers = document.getElementsByClassName('question7');
  var question8answers = document.getElementsByClassName('question8');
  var question9answers = document.getElementsByClassName('question9');
  var question10answers = document.getElementsByClassName('question10');
  var question11answers = document.getElementsByClassName('question11');
  var question12answers = document.getElementsByClassName('question12');

  var scoreLocation = document.querySelector('#right');
  var wrongLocation = document.querySelector('#wrong');
  button2Location.style.display = 'block';
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
      button2Location.style.display = 'none';
      if (question1answers[3].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question1answers[0].disabled = true;
        question1answers[1].disabled = true;
        question1answers[2].disabled = true;
        question1answers[3].disabled = true;
      } else {
        question1answers[0].disabled = true;
        question1answers[1].disabled = true;
        question1answers[2].disabled = true;
        question1answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
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
      button2Location.style.display = 'none';
      if (question2answers[0].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question2answers[0].disabled = true;
        question2answers[1].disabled = true;
        question2answers[2].disabled = true;
        question2answers[3].disabled = true;
      } else {
        question2answers[0].disabled = true;
        question2answers[1].disabled = true;
        question2answers[2].disabled = true;
        question2answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
      }
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
      button2Location.style.display = 'none';
      if (question3answers[2].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question3answers[0].disabled = true;
        question3answers[1].disabled = true;
        question3answers[2].disabled = true;
        question3answers[3].disabled = true;
      } else {
        question3answers[0].disabled = true;
        question3answers[1].disabled = true;
        question3answers[2].disabled = true;
        question3answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.play();
        }
      }
    }
  } else if (counter == 4) {
    if (
      question4answers[0].checked == false && // I simply repeat these steps for each number of the counter
      question4answers[1].checked == false && // (again, each number representing a different slide)
      question4answers[2].checked == false &&
      question4answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
      button2Location.style.display = 'none';
      if (question4answers[0].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question4answers[0].disabled = true;
        question4answers[1].disabled = true;
        question4answers[2].disabled = true;
        question4answers[3].disabled = true;
      } else {
        question4answers[0].disabled = true;
        question4answers[1].disabled = true;
        question4answers[2].disabled = true;
        question4answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.src = 'mk2.mp3';
          soundLocation.play();
        }
      }
    }
  } else if (counter == 5) {
    if (
      question5answers[0].checked == false &&
      question5answers[1].checked == false &&
      question5answers[2].checked == false &&
      question5answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
      button2Location.style.display = 'none';
      if (question5answers[3].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question5answers[0].disabled = true;
        question5answers[1].disabled = true;
        question5answers[2].disabled = true;
        question5answers[3].disabled = true;
      } else {
        question5answers[0].disabled = true;
        question5answers[1].disabled = true;
        question5answers[2].disabled = true;
        question5answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.src = 'mk3.mp3';
          soundLocation.play();
        }
      }
    }
  } else if (counter == 6) {
    if (
      question6answers[0].checked == false && // I simply repeat these steps for each number of the counter
      question6answers[1].checked == false && // (again, each number representing a different slide)
      question6answers[2].checked == false &&
      question6answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
      button2Location.style.display = 'none';
      if (question6answers[1].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question6answers[0].disabled = true;
        question6answers[1].disabled = true;
        question6answers[2].disabled = true;
        question6answers[3].disabled = true;
      } else {
        question6answers[0].disabled = true;
        question6answers[1].disabled = true;
        question6answers[2].disabled = true;
        question6answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.src = 'mk4.mp3';
          soundLocation.play();
        }
      }
    }
  } else if (counter == 7) {
    if (
      question7answers[0].checked == false && // I simply repeat these steps for each number of the counter
      question7answers[1].checked == false && // (again, each number representing a different slide)
      question7answers[2].checked == false &&
      question7answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
      button2Location.style.display = 'none';
      if (question7answers[2].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question7answers[0].disabled = true;
        question7answers[1].disabled = true;
        question7answers[2].disabled = true;
        question7answers[3].disabled = true;
      } else {
        question7answers[0].disabled = true;
        question7answers[1].disabled = true;
        question7answers[2].disabled = true;
        question7answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.src = 'mk5.mp3';
          soundLocation.play();
        }
      }
    }
  } else if (counter == 8) {
    if (
      question8answers[0].checked == false &&
      question8answers[1].checked == false &&
      question8answers[2].checked == false &&
      question8answers[3].checked == false
    ) {
      button1Location.style.display = 'none';
    } else {
      button1Location.style.display = 'block';
      button2Location.style.display = 'none';
      if (question8answers[0].checked == true) {
        scoreCounter += Number('1');
        scoreLocation.innerText = 'Right: ' + scoreCounter;
        alert('Correct!');
        question8answers[0].disabled = true;
        question8answers[1].disabled = true;
        question8answers[2].disabled = true;
        question8answers[3].disabled = true;
      } else {
        question8answers[0].disabled = true;
        question8answers[1].disabled = true;
        question8answers[2].disabled = true;
        question8answers[3].disabled = true;
        wrongCounter += Number('1');
        wrongLocation.innerText = 'Wrong: ' + wrongCounter;
        alert('Wrong!');
        checkLoss();
        if (wrongCounter == 3) {
          soundLocation.src = 'mk3.mp3';
          soundLocation.play();
        }
      }
    }
  }
}

function checkLoss() {
  if (wrongCounter == 3) {
    var bodylocation = document.querySelector('body');
    bodylocation.classList.add('gameover');
    var containerLocation = document.getElementById('container');
    container.style.display = 'none';
    vidLocation.pause();
    tryAgainLocation.style.display = 'block';
  }
}

function backHome() {
  location.reload();
}

vidLocation.addEventListener('ended', backToStatic);
function backToStatic() {
  tvLocation.style.backgroundImage =
    "url('http://media0.giphy.com/media/OVlFjmEDhx9rG/giphy.gif')";
  vidLocation.src = '';
}

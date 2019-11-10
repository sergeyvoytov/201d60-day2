'use strict';
//Find out the name of the user and greeting
var totalAnswered = 0;
var userName = prompt('Hello! What is your name?');
alert('Good to meet you ' + userName + '! ' + 'Please answer few questions about Sergey to learn more about him in Yes/No format.');


function questionOne() {
  //First question about dogs with uppercase function
  var dogs = prompt('Does Sergey like dogs?').toUpperCase();
  console.log('likes dogs:', dogs);
  if (dogs === 'YES') {
    //console.log('You are correct! Sergey likes dogs');
    alert('You are correct! Sergey likes dogs');
    totalAnswered++;

  } else {
    //console.log('You are incorrect. Sergey likes dogs');
    alert('You are incorrect. Sergey likes dogs');
  }
}

//Second question about piano with uppercase function

function questionTwo() {
  var playsPiano = prompt('Does Sergey play piano?').toUpperCase();
  console.log('plays piano:', playsPiano);

  if (playsPiano === 'YES') {
    //console.log('You are incorrect. Sergey hates piano');
    alert('You are incorrect. Sergey hates piano');
  } else {
    //console.log('You are correct! Sergey doesn\'t play piano');
    alert('You are correct! Sergey doesn\'t play piano');
    totalAnswered++;
  }
}
//Third question about life in Seattle
function questionThree() {

  var lifeSeattle = prompt('Does Sergey live in Seattle?').toUpperCase();
  console.log('lifeSeattle:', lifeSeattle);

  if (lifeSeattle === 'YES') {
    //console.log('You are correct! Sergey lives in Emerald city');
    alert('You are correct! Sergey lives in Emerald city');
    totalAnswered++;

  } else {
    //console.log('You are incorrect. Sergey lives in Seattle');
    alert('You are incorrect. Sergey lives in Seattle');
  }
}
// Forth question
function questionFour() {

  var playsSoccer = prompt('Does Sergey like soccer?').toUpperCase();
  console.log('playsSoccer:', playsSoccer);

  if (playsSoccer === 'YES') {
    //console.log('You are correct! Sergey loves to watch soccer');
    alert('You are correct! Sergey loves to watch soccer');
    totalAnswered++;

  } else {
    //console.log('You are incorrect. Sergey likes soccer');
    alert('You are incorrect. Sergey likes soccer');
  }
}
// Fifth question
function questionFive() {
  var classicalMusic = prompt('Does Sergey like classical music?').toUpperCase();
  console.log('classicalMusic:', classicalMusic);

  if (classicalMusic === 'YES') {
    //console.log('You are incorrect. Sergey is not a fan of classical music');
    alert('You are incorrect. Sergey is not a fan of classical music');
  } else {
    console.log('You are correct! Sergey doesn\'t like classical music');
    alert('You are correct! Sergey doesn\'t like classical music');
    totalAnswered++;

  }
}

// Sixth question
function questionSix() {
  var number;
  var counter = 0;

  while (counter !== 4) {
    number = parseInt(prompt('what is your fav number?'));
    if (number === 20) {
      alert('you guessed it right');
      totalAnswered++;
      break;
    } else if (number < 20) {
      alert('you guessed too low');
    } else if (number > 20) {
      alert('you guessed too high');
    } else if (number === isNaN || number === null) {
      alert('please enter a real number');
    }
    console.log('counter:', counter);
    counter++;
  }
  if (counter === 4) {
    alert('you have reached your attempts. Right answer was 20');
  }
}
// seventh question
function questionSeven() {
  var foodArray = ['beer', 'pizza', 'cheese', 'chicken', 'apple', 'smoked fish', 'cookies'];
  var guess;
  var loopCount = 0;
  var flag = false;

  while (loopCount < 6 && !flag) {
    guess = prompt('What does Sergey like to eat?').toLowerCase();
    loopCount++;
    for (var j = 0; j < foodArray.length; j++) {
      if (guess === foodArray[j]) {
        alert('Great job! I like it. Go get yourself a cookie!');
        totalAnswered++;
        flag = true;
      }
    }
    if (loopCount !== 6 && !flag) {
      alert('No, I dont like it');
    }
  }
  if (loopCount === 6 && !flag) {
    alert('You did not guess correctly within 6 times!');
  }
  alert('My favorite foods:  ' + foodArray);
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
alert(userName + ' , thank you for using my site and learning about me! You got ' + totalAnswered + ' correct out of 7 questions! I\'m proud of you..');

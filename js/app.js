'use strict';
//Find out the name of the user and greeting

var userName = prompt('Hello! What is your name?');
alert('Good to meet you ' + userName + '! ' + 'Please answer few questions about Sergey to learn more about him in Yes/No format.')

//First question about dogs with uppercase function
var dogs = prompt('Does Sergey like dogs?').toUpperCase();
console.log('likes dogs:', dogs);

if (dogs === 'YES') {
    //console.log('You are correct! Sergey likes dogs');
    alert('You are correct! Sergey likes dogs');
} else {
    //console.log('You are incorrect. Sergey likes dogs');
    alert('You are incorrect. Sergey likes dogs');
}

//Second question about piano with uppercase function
var playsPiano = prompt('Does Sergey play piano?').toUpperCase();
console.log('plays piano:', playsPiano);

if (playsPiano === 'YES') {
    //console.log('You are incorrect. Sergey hates piano');
    alert('You are incorrect. Sergey hates piano');
} else {
    //console.log('You are correct! Sergey doesn\'t play piano');
    alert('You are correct! Sergey doesn\'t play piano');
}

//Third question about life in Seattle
var lifeSeattle = prompt('Does Sergey live in Seattle?').toUpperCase();
console.log('lifeSeattle:', lifeSeattle);

if (lifeSeattle === 'YES') {
    //console.log('You are correct! Sergey lives in Emerald city');
    alert('You are correct! Sergey lives in Emerald city');
} else {
    //console.log('You are incorrect. Sergey lives in Seattle');
    alert('You are incorrect. Sergey lives in Seattle');
}

// Forth question

var playsSoccer = prompt('Does Sergey like soccer?').toUpperCase();
console.log('playsSoccer:', playsSoccer);

if (playsSoccer === 'YES') {
    //console.log('You are correct! Sergey loves to watch soccer');
    alert('You are correct! Sergey loves to watch soccer');
} else {
    //console.log('You are incorrect. Sergey likes soccer');
    alert('You are incorrect. Sergey likes soccer');
}

// Fifth question

var classicalMusic = prompt('Does Sergey like classical music?').toUpperCase();
console.log('classicalMusic:', classicalMusic);

if (classicalMusic === 'YES') {
    //console.log('You are incorrect. Sergey is not a fan of classical music');
    alert('You are incorrect. Sergey is not a fan of classical music');
} else {
    console.log('You are correct! Sergey doesn\'t like classical music');
    alert('You are correct! Sergey doesn\'t like classical music');
}
alert(userName + ' , thank you for using my site and learning about me!');

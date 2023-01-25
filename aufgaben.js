// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!
const rps = (p1, p2) => {
  let won = null;
  
  switch(p1) {
  case "scissors":
    if (p2 === "paper") {
      won = 1;
    } else if (p2 === "rock") {
      won = 2;
    }
    break;
  case "paper":
    if (p2 === "scissors") {
      won = 2;
    } else if (p2 === "rock") {
      won = 1;
    }
    break;
  case "rock":
    if (p2 === "scissors") {
     won = 1;
    } else if (p2 === "paper") {
      won = 2;
    }
    break;
}
  
  if (won != null) {
    return `Player ${won} won!`;
  } else {
    return "Draw!";
  }
  };

  // The code provided is supposed replace all the dots . in the specified String str with dashes
const replaceDots = function(str) { 
  return str.replace(/\./g, '-');
};

// Implement a function called multiply, which takes two numbers and returns their product:
let a = 2,
    b = 3;
function multiply(a,b) {
  return a * b;
}
multiply(2.3);

// Your boss decided to save money by purchasing some cut-rate optical character recognition 
//software for scanning in the text of old novels to your database. At first it seems to capture 
// words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
function stringClean(s) {
  return s.replace(/[0-9]/g, "" );
}

// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){
  let arr = [5];
  let res = [...listOfNumbers, ...arr];
  return res;
}
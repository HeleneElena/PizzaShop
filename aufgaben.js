// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
  let arr = str.split(' ');
  let result = arr.map(el => el + ` ${el.length}`);
  return result;
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  return s.repeat(n);
}

// Nathan loves cycling.Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return parseInt(time * 0.5);
}

// Your task is to make two functions ( max and min, or maximum and minimum, etc., 
// depending on the language ) that receive a list of integers as input, and 
// return the largest and lowest number in that list, respectively.
const min = function(list) {
    return Math.min(...list);
};

const max = function(list) {
    return Math.max(...list);
};

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
  return string.replace(/[aeiou]+/g, "");
}

// Write a function named setAlarm which receives two parameters. The first parameter, employed, 
//is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are 
// the circumstances under which you need to set an alarm). It should return false otherwise.
function setAlarm(employed, vacation) {
    return (employed && !vacation) ? true : false;
}

// Grade book Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60  && score < 70) {
        return 'D';
    } else {
        return 'F';
    }
}

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
function remove (str) {
   return str.split('!').join('')+'!';
}
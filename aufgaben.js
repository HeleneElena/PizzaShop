// Write a function that takes a positive integer n, sums all the cubed 
// values from 1 to n, and returns that sum.
//Assume that the input n will always be a positive integer.
function sumCubes(n){
  let sum = 0;
  for (let i = 1; i <=n; i++) {
    sum += i**3;
  }
  return sum;
}

// A square of squares
//You like building blocks. You especially like building blocks that are squares. 
//And what you even like more, is to arrange them into a square of square building blocks!
//However, sometimes, you can't arrange them into a square. Instead, you end up with
// an ordinary rectangle! Those blasted things! If you just had a way to know, whether 
// you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
let isSquare = function(n){
  let x = Math.sqrt(n);
  return x * x === n;
};

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.
function remainder(n, m){
if (n > m) {
    let answer = n % m;
    if (m === 0) {
      return NaN;
    }
    else {
      return answer;
    }
  }
  else if (m > n) {
    let answer = m % n;
    if (n === 0) {
      return NaN;
    }
    else {
      return answer;
    }
  }
  else {
    let answer = n % m;
    return answer;
  }
}

// Given an array of integers.
//Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
   if (input && input.length) {
        let posSum = 0;
        let negSum = 0;
        input.forEach(num => num > 0 ? posSum++ : negSum += num);
        return [posSum, negSum];
    } else {
        return [];
    }
  }

// Character recognition software is widely used to digitise printed texts. 
// Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), 
//are digitised character recognition softwares often make mistakes.
  function correct(s) {
    let s1 = s.replace(/5/g, 'S');
    let s2 = s1.replace(/0/g, 'O');
    let s3 = s2.replace(/1/g, 'I');
    return s3;
}

// There are pillars near the road. 
// The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters
// (without the width of the first and last pillar).
function pillars(numPill, dist, width) {
  if (numPill == 1) {
    return 0;
  } else if (numPill == 2) {
    return dist * 100;
  } else {
    return ((dist * 100)* (numPill-1)) + (width * (numPill - 2));
  }
}
// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// TEST 1 (inlined callback):
const length1 = getLength(items, arrLength => 'The length of this array is ' + arrLength + '.');
console.log(length1);

// TEST 2 (declaring callback before hand):
function arrLength(length) {
  return 'The length of this array is ' + length + '.';
}

const length2 = getLength(items, arrLength);
console.log(length2);

//----------------------------------------------------------------------------------------------------

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.slice(-1));
}
// TEST 1 (inlined callback):
const last1 = last(items, lastItem => 'The last item in this array is ' + lastItem + '.');
console.log(last1);

// TEST 2 (declaring callback before hand):
function lastItem(lastOne) {
  return 'The last item in this array is ' + lastOne + '.';
}

const last2 = last(items, lastItem);
console.log(last2);

//----------------------------------------------------------------------------------------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

// TEST 1 (inlined callback):
const sum1 = sumNums(2, 3, addition => 'The sum of this two numbers is ' + addition + '.');
console.log(sum1);

// TEST 2 (declaring callback before hand):
function addition(sum) {
  return 'The sum of this two numbers is ' + sum + '.';
}

const sum2 = sumNums(2, 3, addition);
console.log(sum2);

//----------------------------------------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// TEST 1 (inlined callback):
const multiply1 = multiplyNums(2, 3, product => 'The product of this two numbers is ' + product + '.');
console.log(multiply1);

// TEST 2 (declaring callback before hand):
function product(multiply) {
  return 'The product of this two numbers is ' + multiply + '.';
}

const multiply2 = multiplyNums(2, 3, product);
console.log(multiply2);

//----------------------------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}

const contains1 = contains('Gum', items, presentItem => presentItem);
console.log(contains1);

//----------------------------------------------------------------------------------------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

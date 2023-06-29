const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//----- Mutating methods -----//

// Add one or more elements to the end of the array
array.push(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove the last element of the array and return the removed element
const removedElement1 = array.pop(); // [1, 2, 3, 4, 5, 6, 7, 8, 9], removedElement1 = 10

// Add one or more elements to the beginning of the array
array.unshift(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Remove the first element of the array and return the removed element
const removedElement2 = array.shift(); // [1, 2, 3, 4, 5, 6, 7, 8, 9], removedElement2 = 0

// Change the content of the array by removing or adding elements
array.splice(2, 2, 'a', 'b'); // [1, 2, 'a', 'b', 5, 6, 7, 8, 9]

// Sort the elements in the array in Unicode order and mutate the original array
array.sort(); // [1, 2, 5, 6, 7, 8, 9, 'a', 'b']

// Reverse the order of elements in the array and mutate the original array
array.reverse(); // ['b', 'a', 9, 8, 7, 6, 5, 2, 1]

// Assign a specific value to all or part of the array
array.fill(0); // [0, 0, 0, 0, 0, 0, 0, 0, 0]

//----- Creating new arrays -----//

// Concatenate two or more arrays together and return a new array
const newArray = array.concat([10, 11, 12]); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12]

// Join all the elements in the array into a string, separated by a specified character
const joinedString = array.join('-'); // '0-0-0-0-0-0-0-0-0-10-11-12'

// Create a new subarray from a range of the original array
const slicedArray = array.slice(2, 5); // [0, 0, 0]

// Return the first index of an element found in the array, or -1 if not found
const index1 = array.indexOf(0); // 0

// Return the last index of an element found in the array, or -1 if not found
const index2 = array.lastIndexOf(0); // 8

// Check if an element exists in the array, returning a boolean value
const includesElement = array.includes(5); // true

// Create a shallow copy of the original array or a portion of it
const copiedArray = array.slice(); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12]

//----- Creating new arrays -----//

// Create a new array by performing a callback function on each element in the original array
const mappedArray = array.map((element) => element * 2); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Create a new array that contains only elements satisfying a condition determined by a callback function
const filteredArray = array.filter((element) => element > 5); // [6, 7, 8, 9]

// Accumulate the elements in the array into a single value by performing a callback function
const reducedValue = array.reduce((accumulator, element) => accumulator + element, 0); // 45

// Perform a callback function on each element in the array without creating a new array
array.forEach((element) => console.log(element)); // Output each element to the console

// Check if all elements in the array satisfy a condition, returning a boolean value
const allGreaterThanZero = array.every((element) => element > 0); // true

// Check if at least one element in the array satisfies a condition, returning a boolean value
const someGreaterThanFive = array.some((element) => element > 5); // true

//----- Custom Array Functions -----//
//Seach
function SearchArray(array, element) {
  return array.includes(element);
}

//Add
function AddArray(array, element) {
  array.push(element);
  return array;
}

//Remove
function RemoveArray(array, element) {
  //using filter
  return array.filter((item) => item !== element); //return new array with removed element

  //using splice
  let index = array.indexOf(element);
  return array.splice(index, 1); //return removed element
}

//Update
function UpdateArray(array, element, newElement) {
  let index = array.indexOf(element);
  array[index] = newElement;
  return array;
}

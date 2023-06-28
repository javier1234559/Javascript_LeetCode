const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Seach
function SearchArray(array,element){
  return array.includes(element);
}

//Add
function AddArray(array,element){
  array.push(element);
  return array;
}

//Remove
function RemoveArray(array,element){

  //using filter
  return array.filter(item => item !== element); //return new array with removed element  

  //using splice
  let index = array.indexOf(element);
  return array.splice(index,1); //return removed element
}


//Update
function UpdateArray(array,element,newElement){
  let index = array.indexOf(element);
  array[index] = newElement;
  return array;
}
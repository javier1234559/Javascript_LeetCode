//167.Two Sum II - Input Array Is Sorted
//Array
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) { 
  let index1 = 0 ;
  let index2 = numbers.length - 1;
  while(index1 < index2){
    let sum = numbers[index1] + numbers[index2];
      if(sum === target){
        return [index1 + 1 ,index2 + 1];
      }
      else if(sum < target){
        index1 ++ ;
      }else if(sum > target){
        index2 -- ;
      }
  }
};

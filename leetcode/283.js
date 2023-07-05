//Two Points
//Array
//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
  //base case
  let n = nums.length;
  if(n < 2 )return;

  //define pointer
  let left = 0 , right = 0 ;
  
  //move zero to the back
  while(right < n){
    if(nums[left] != 0 ){
      left++;
      right++;
    }else if(nums[right] === 0 ){
      right++;
    }else{
      let t = nums[right];
      nums[right] = nums[left];
      nums[left] = t ;
    }
  }
};
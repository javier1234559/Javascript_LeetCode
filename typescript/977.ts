//977. Squares of a Sorted Array
//Two Pointers
//https://leetcode.com/problems/squares-of-a-sorted-array/


function sortedSquares(nums: number[]) {
    //base case
    let n :number = nums.length ;
    if(n < 2 ){
     nums[0] = nums[0] ** 2 ;
     return nums;
    }

    //define 2 pointers
    let left :number = 0;
    let right :number = n - 1 ;
    let result :number[]  = [] ;
    let i :number = n - 1 ;
    while(i >= 0){
      let check :boolean =  nums[left]**2 < nums[right]**2;
      if(check){
        result[i--] = nums[right]**2;
        right -- ;
      }else{
        result[i--] = nums[left]** 2;
        left++;
      }
    }
   return result;
};

console.log(sortedSquares([-5,-3,-2,-1]))
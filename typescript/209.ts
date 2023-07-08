//Sliding Window
//Array
//https://leetcode.com/problems/minimum-size-subarray-sum/description/

function minSubArrayLen(target: number, nums: number[]): number {
    //define pointer
    let left :number = 0;
    let right :number = 0;

    //define flag
    let sum :number = 0 ;
    let minResult :number = Number.MAX_VALUE;

    while(right < nums.length){
      sum += nums[right]; //add current element

      while(target <= sum){ // contract window
        minResult = Math.min(minResult,right - left + 1);
        sum -= nums[left++];
      }
     
      right++;
    }
    
    return minResult === Number.MAX_VALUE ? 0 : minResult; 
};

console.log(minSubArrayLen(4,[1,4,4]))
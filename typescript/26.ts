//Array
//Two Pointers
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/


function removeDuplicates(nums: number[]) {
    // base
    let n :number = nums.length ;
    if(n < 2) return ;

    //define 2 point
    let point1 :number = 0 , point2: number = 1;

    //main execute
    while(point2 < n ){
      if(nums[point1] !== nums[point2]){
        point1++ ;
        nums[point1] = nums[point2];
      }
      point2++;
    }

    return point1 + 1 ;
};


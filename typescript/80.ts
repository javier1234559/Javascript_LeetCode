function removeDuplicates(nums: number[]) {
    //base
    let n : number = nums.length;
    if(n < 3) return n;

    //define 2 pointers
    let left :number  = 0;
    let right:number = 1 ;
    let flag :number =  1 ;

    //remove 3 duplicate
    while(right < n ){
      if(nums[left] !== nums[right]){
        left++;
        nums[left] = nums[right];
        flag = 1; //reset
      }else if(flag < 2 && nums[left] === nums[right]){ //just make it more clear
        left++;
        nums[left] = nums[right];
        flag++;
      }
      right++;
    }
    return left + 1 ;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
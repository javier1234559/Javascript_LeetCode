//Binary Search by I used two pointers
//744. Find Smallest Letter Greater Than Target
//https://leetcode.com/problems/find-smallest-letter-greater-than-target/

function findMin(nums: number[]): number {
  //base case
  let n: number = nums.length;
  if (n < 2) return nums[0];

  //define two pointers
  let left: number = 0;
  let right: number = n - 1;
  let minNum: number = Number.MAX_SAFE_INTEGER;

  //solve
  while (left <= right) {
    console.log(left, right);
    if (minNum > nums[left]) minNum = nums[left];
    if (minNum > nums[right]) minNum = nums[right];
    left++;
    right--;
  }
  return minNum;
};

console.log(findMin([3, 1, 2]));
//1920. Build Array from Permutation
//Easy
//Array
//https://leetcode.com/problems/build-array-from-permutation/

var buildArray = function (nums) {
  return nums.map((item) => nums[item]);
};
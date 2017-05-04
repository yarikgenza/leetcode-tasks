/**
  * Two sum.
  *
  * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  * You may assume that each input would have exactly one solution, and you may not use the same element twice.
  *
  * @param {array[number]} nums
  * @param {number} target
  */

const nums = [3, 2, 4];
/* target  7
  expected  [0, 2] */

const twoSum = (nums, target) => {
  for (var i=0; i < nums.length - 1; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (i + j !== 0) {return [i, j]};
      }
    }
  }
}

console.log(twoSum(nums, 7));

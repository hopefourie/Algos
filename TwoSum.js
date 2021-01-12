/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solution/

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
 */
var twoSum = function (numbers, target) {
  let sum;
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;
  while (sum !== target) {
    sum = numbers[pointer1] + numbers[pointer2];
    if (sum < target) pointer1++;
    if (sum > target) pointer2--;
  }
  return [pointer1 + 1, pointer2 + 1];
};

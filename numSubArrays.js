/*
https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/submissions/

Given an array of integers arr and two integers k and threshold.

Return the number of sub-arrays of size k and average greater than or equal to threshold.

*/

var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += arr[j];
  }
  let count = 0;
  if (sum >= threshold * k) count++;
  let start = 0;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[start++];
    if (sum >= threshold * k) {
      count++;
    }
  }
  return count;
};

function findArrayQuadruplet(arr, s) {
  let length = arr.length;
  if (length < 4) {
    return [];
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < length - 3; i++) {
    for (let j = i + 1; j < length - 2; j++) {
      let remaining = s - (arr[i] + arr[j]);
      let low = j + 1;
      let high = length - 1;
      while (low < high) {
        if (arr[low] + arr[high] < remaining) {
          low++;
        } else if (arr[low] + arr[high] > remaining) {
          high--;
        } else {
          return [arr[i], arr[j], arr[low], arr[high]];
        }
      }
    }
  }
  return [];
}

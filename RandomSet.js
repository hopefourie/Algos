/*
Design a RandomizedSet class, that has 3 methods.

insert: If the value is not already in the set, add a value to a random set of values and return true. If it is already there, return false.

delete:
*/

function RandomizedSet() {
  this.hash = {};
  this.arr = [];
}

RandomizedSet.prototype.insert = function (value) {
  if (this.hash[value]) {
    return false;
  } else {
    this.hash[value] = this.arr.length;
    this.arr.push(value);
    return true;
  }
};
RandomizedSet.prototype.delete = function (value) {
  if (this.hash[value]) {
    let lastVal = this.arr.pop();
    this.hash[lastVal] = this.hash[value];
    this.arr[this.hash[value]] = lastVal;
    delete this.hash[value];
    return true;
  } else {
    return false;
  }
};
RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * this.arr.length);
  return this.arr[random];
};

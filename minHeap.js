/*
Right a class that mimics a minHeap data structure. It should have three methods:
insert: takes a number and adds it to the heap
remove: removes the smallest number from the array and returns that number
sort: returns sorted array
*/
function MinHeap() {
  this.heap = [null];
  this.insert = function (num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      //while the child is less than the parent, we want to bubble it up
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        //make sure idx != 0 (thus value would be null)
        if (idx >= 1) {
          //swap the parent and child
          [this.heap[Math.floor(idx)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx)],
          ];
          //if the parant node is not the root node
          if (Math.floor(idx / 2) > 1) {
            //change index for next loop
            idx = Math.floor(idx / 2);
          } else {
            //if the child is not smaller than the parent (ie it is in the right place)
            break;
          }
        }
      }
    }
  };
  this.remove = function () {
    let smallest = this.heap[1];
    //if there is more than one element in the heap
    if (this.heap.length > 2) {
      //replace the top of the heap with the last element in the array
      this.heap[1] = this.heap[this.heap.length - 1];
      //remove the last element in the array
      this.heap.splice(this.heap.length - 1, 1);
      //if there are only 2 elements in the heap
      if (this.heap.length === 3) {
        if (this.heap.length[1] > this.heap.length[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      //while the current element is greater than both of its children
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        //if the left child is less than the right, switch the left child and the parent
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          //keep i the element we are bubbling
          i = 2 * i;
        }
        //if the right child is less than the left, switch the right child and the parent
        if (this.heap[right] < this.heap[left]) {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          //keep i the element we are bubbling
          i = 2 * i + 1;
        }
        //adjust left and right to the children of i
        left = 2 * i;
        right = 2 * i + 1;
        //if either child is undefined, break out of the while loop bc we are at the bottom of the heap
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
      //if there is only 1 element in the heap, remove that element and return it
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
      //if the heap is empty return null
    } else {
      return null;
    }
    return smallest;
  };
  this.sort = function () {
    let result = new Array();
    //keep removing the smallest element and adding it to a new array until the heap is empty
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    this.heap = result;
    return result;
  };
}

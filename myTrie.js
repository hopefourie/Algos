//Write a data structure that mimics a trie

function Node() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
}

function Trie() {
  this.root = new Node();

  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (node.keys.has(word[0])) {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      } else {
        return false;
      }
    }
    if (node.keys.has(word[0]) && node.keys.get(word[0]).isEnd()) {
      return true;
    }
    return false;
  };

  this.print = function () {
    let words = [];
    function search(node, str) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), str.concat(letter));
          if (node.isEnd()) {
            words.push(str);
          }
        }
      } else if (str.length > 0) {
        words.push(str);
      }
    }
    search(this.root, new String());
    return words;
  };
}

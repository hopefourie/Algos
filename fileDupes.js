/*
https://leetcode.com/problems/find-duplicate-file-in-system/

Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"
*/

var findDuplicate = function (paths) {
  let dataStructures = makeDataStructures(paths);
  let fileNames = dataStructures[0];
  let hash = dataStructures[1];
  let result = [];
  let curr = 0;
  let last = 0;
  while (curr < fileNames.length - 1) {
    let comp = curr + 1;
    let instance = [hash.get(curr)];
    while (comp < fileNames.length && last < 2) {
      if (fileNames[curr] === fileNames[comp]) {
        instance.push(hash.get(comp));
        hash.set(comp, hash.get(fileNames.length - 1));
        hash.delete(fileNames.length - 1);
        if (comp === fileNames.length - 1) {
          fileNames.pop();
          last++;
        } else {
          fileNames[comp] = fileNames.pop();
        }
      } else {
        comp++;
      }
    }
    if (instance.length > 1) {
      result.unshift(instance);
    }
    curr++;
  }
  return result;
};

function makeDataStructures(paths) {
  let hash = new Map();
  let files = [];
  for (let i = 0; i < paths.length; i++) {
    let rootArr = paths[i].split(' ');
    let rootName = rootArr.shift();
    for (let j = 0; j < rootArr.length; j++) {
      let splitFile = rootArr[j].split('(');
      let name = splitFile[1].slice(0, -1);
      files.push(name);
      hash.set(files.length - 1, rootName + '/' + splitFile[0]);
    }
  }
  return [files, hash];
}

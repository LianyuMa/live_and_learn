function makeDependency (tree, result) {
  if (result.length == 0) {return [];}

  var dep = result[0].concat('@', tree[result[0]].version);
  return makeDependency(tree, result.slice(1)).concat(getDependencies(tree[result[0]]).concat(dep));
}

function getDependencies (tree) {
  if (tree.hasOwnProperty('dependencies')) {
    var result = Object.getOwnPropertyNames(tree.dependencies);
    return makeDependency(tree.dependencies, result).sort().filter(function(val, index, arr) {
      return index == arr.length || val != arr[index + 1];
    });
  } else{
    return [];
  }
}

module.exports = getDependencies;
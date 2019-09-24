function zipList(arr1, arr2){
  let i = 0;
  let arr= [];
  while(i<arr1.length){
    arr.push(arr1[i]);
    arr.push(arr2[i]);
    i++;
  }
return arr;
}

function zipListTheSimpleWay(arr1, arr2){
  return _.flatten(_.zip(arr1, arr2));
}
console.log(zipListTheSimpleWay([1,2,3],[1,2,3] ))
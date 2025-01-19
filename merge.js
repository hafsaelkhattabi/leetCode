function mergeSortedArrays(arr1, arr2) {
  //declare an empty array
    let arr =[]
  // concatine arr1 and arr2 and sorting them in arr
    arr = arr1.concat(arr2).sort((a,b)=> a -b)
  //return the result 
    return arr
}
//input : 
let arr1 = [1,2,3]
let arr2= [5,4,3]
console.log(mergeSortedArrays(arr1, arr2))
/*
output : 
[ 1, 2, 3, 3, 4, 5 ]
*/

function getIntersection(arr1, arr2) {
  //for the first array arr1
    for(let i=0; i<arr1.length; i++){
      //for the second array arr2
        for(let j=0; j<arr2.length; j++){
          //check if include the same value in the arr2 exist in arr1
          if(arr1.includes(arr2[j])){
              return true
          }
          else{
              return false
          }
    }
    }
}
//input :
let arr1 = [1,2,3,4]
let arr2 = [1,7,8,9]
console.log(getIntersection(arr1, arr2))
//output : true

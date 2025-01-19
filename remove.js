var removeDuplicates = function(nums) {
  //set() help to remove duplicates numbers from an array
    return [...new Set(nums)]
    
};
let nums = [1,1,1,4,5]
  console.log(removeDuplicates(nums))

/*
input : let nums = [1,1,1,4,5]
output : [ 1, 4, 5 ]
*/

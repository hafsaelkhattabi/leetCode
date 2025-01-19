function reverseArray(nums) {
  //initialize an array
   let arr = []
  // a loop work from the last elemetn in the nums array to the first
   for(let i = nums.length - 1; i>=0; i--){
     //push all the values in the arr array 
       arr.push(nums[i])
   }
  //return the final result
   return arr
}
//input : 
let nums = [1,2,3]
console.log(reverseArray(nums))
/*output:
[ 3, 2, 1 ]*/

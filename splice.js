function removeElement(nums, value) {
   return nums.filter(num => num !== value);  // Create a new array excluding `value`
}
//input : 
let nums = [1,2,3,4]
let value = 3
console.log(removeElement(nums, value))
//output : [1,2,4]

//with splice() method
function removeElement(nums, value) {
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] === value) {
           nums.splice(i, 1);  // Removes 1 element at index `i`
           i--;  // Adjust the index after removal
       }
   }
   return nums;
}
//input :
let nums = [1,2,3,4]
let value = 4
console.log(removeElement(nums, value))
//output : [1,2,3]

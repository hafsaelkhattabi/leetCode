function findLargest(nums) {
    for(let i=0; i<nums.length; i++){
      // Math.max() to find the largest integer in the array nums
    nums = Math.max(...nums)
    }
    return nums
}
let nums = [1,2,3]
console.log(findLargest(nums))
//output : 3

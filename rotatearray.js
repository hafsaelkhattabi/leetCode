function rotateArray(nums, k) {
   
    let part1 = nums.slice(0, nums.length - k);  // First part of the array
    let part2 = nums.slice(nums.length - k);     // Second part of the array
    
    return part2.concat(part1);  // Concatenate the second part with the first part
}
//input :
let nums = [1,2,3,4]
let k = 3
console.log(rotateArray(nums, k))
//output : [ 2, 3, 4, 1 ]

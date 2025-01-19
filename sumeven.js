function sumEvenNumbers(nums) {
  //filter just the even number
    nums = nums.filter(num => num % 2 ===0)
  //apply the sum with reduce() 
    nums = nums.reduce((acc, num) => acc + num, 0);
    return nums
}
//input :
let nums = [1,2,3,4]
console.log(sumEvenNumbers(nums))
/*
output: 6
*/

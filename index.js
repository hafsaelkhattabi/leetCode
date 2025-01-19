function findIndex(nums, value) {
    for(let i=0; i<nums.length; i++){
      //includes work accros the array and if the value return his index
       if(nums.includes(value)){
           return nums.indexOf(value)
       }
         // if not return -1
       else{
           return -1
       }
    }
}
//input :
let nums = [1,2,3,4]
let value = 3
console.log(findIndex(nums, value))
// ouput : 2

var removeElement = function(nums, val) {
  // flter all val (input the user ) from the input array
    // the filter method return an updated array with all modification in it !!!
    nums = nums.filter(num => num !== val);
  // return the new array without val value
    return nums
};

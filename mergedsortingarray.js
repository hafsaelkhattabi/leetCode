var merge = function(nums1, m, nums2, n) {
    //get the integer between 0 and m
    let arr1 = nums1.slice(0,m)
    //get the integers betwenn 0 and n
    let arr2 = nums2.slice(0,n)
    //declare an array who hold the concatination the arr1 and arr2 and also sorting them
    let M = arr1.concat(arr2).sort((a,b) => a -b)
    //put all the values in nums1 from the merged array M !!!! ( we use nums1[i] not nums1 cause work as a variable
    for(let i = 0; i<M.length; i++){
        nums1[i] = M[i];
    }
    // return the new nums1 (result)
    return nums1
};

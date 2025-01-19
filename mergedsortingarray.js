var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0,m)
    let arr2 = nums2.slice(0,n)

    let M = arr1.concat(arr2).sort((a,b) => a -b)
    
    for(let i = 0; i<M.length; i++){
        nums1[i] = M[i];
    }
    return nums1
};

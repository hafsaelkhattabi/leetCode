function isPalindrome(str) {
    let str1 = str.split('').reverse().join('')
    for(let i=0; i<str.length;i++){
        for(let j=0;j<str1.length;j++){
            if(str[i] === str1[j]){
                return true
            }
            else {
                return false
            }
        }
    }
}
//input :
let str = "hello"

console.log(isPalindrome(str))
//output : false

function countVowels(str) {
  //an array of vowels
    const v = ["a", "e", "i", "o", "u"]
    let count = 0
    for(let i=0; i<str.length;i++){
      //check if a vowel in str to increase the count 
        if(v.includes(str[i].toLowerCase())){  // transforme to lower case for count all the vowel lower and also upper
            count++
        }
    }
    return count
}
//input :
let str = "hello"

console.log(countVowels(str))
//output : 2

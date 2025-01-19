function replaceSpaces(str) {
    let str1 =''
    for(let i=0; i<str.length;i++){
        if(str[i] === ' '){
            str1 += '-'
        }
        else {
            str1 += str[i]; // Add the current character if it's not a space
        }
    }
    return str1
}
//input :
let str = "hell o"

console.log(replaceSpaces(str))
//output : hell-o

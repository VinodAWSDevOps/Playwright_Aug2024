
//Given a string s consisting of words and spaces, return the length of the last word in the string

function lengthOfLastWord(s)
{
    if(s.length==0) return 0;
    let arr = s.trim().split(' ');
    return arr[arr.length-1].length;
}
let result=lengthOfLastWord(" fly me to the moon ")
console.log("The length of the last word in a string is : "+result)

//Write a function to check if two strings are anagrams.

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    if (str1.length !== str2.length) {
        return false
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1 === str2
}
const check = isAnagram('hello', 'world')
console.log("The given two strings are Anagram : "+check)


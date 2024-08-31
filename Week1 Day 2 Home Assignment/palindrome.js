//If the given string and reverse string is same --> palindrome
function isPalindrome(originalstr) {
    let revstr = "";
    for (let i = originalstr.length - 1; i >= 0; i--) {
        revstr = revstr + originalstr[i]
    }
    if (originalstr == revstr) {
        return true
    } else {
        return false
    }
}

let result = console.log(isPalindrome('madam'))
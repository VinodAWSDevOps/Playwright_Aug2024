//Sum of n values
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum = sum + i;
    return sum
}
const n = 5
console.log(sumOfNumbers(n))
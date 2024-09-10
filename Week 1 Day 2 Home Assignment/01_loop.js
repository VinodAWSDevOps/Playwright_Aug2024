/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

const val=5;
let sum=0;
function sumOfNumbers()
{
    for(let i=1;i<=val;i++)
    {
        sum=sum+i
    }
    console.log(`The Sum of all the values between 1 to ${val} is ` +sum)
}
sumOfNumbers()

const startNum=1;
const endNum=10;
let sumadd=0;
function additionOfNumbers()
{
    for(let i=1;i<=startNum;i++)
    {
sum=sum+i
console.log(`${i}, ${i+1} = ${sum}`)
console.log(sum)
    }
}

additionOfNumbers()
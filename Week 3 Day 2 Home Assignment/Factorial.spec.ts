//Factorial Calculation
let n=5
function factorial(num:number):number
{
    let fact=1;
    if(num===0)
        return 1;
    for(let i =2;i<=num;i++)
        fact=fact*i
    return fact
}
console.log(factorial(n))
//Array Intersection Calculation
let arr1:number[] = [1,3,5,7,9]
let arr2:number[]= [1,3,5,7,9]
function res_arr(arr1:number[],arr2:number[]):number[]
{
let new_arr:number[]=[]
for(let i=0;i<arr1.length;i++)
{
    for(let j=0;j<arr2.length;j++)
    {
        if(arr1[i]===arr2[j])
        {
            new_arr.push(arr1[i])
        }
        
    }    
}
    console.log("There are No common elemnets in both the array's")
return new_arr
}
console.log("Array of Intersection is : ")
console.log(res_arr(arr1,arr2))
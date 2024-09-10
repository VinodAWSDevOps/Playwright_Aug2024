//Two Sum
const nums = [2, 4, 7, 8, 11, 14]
const k = 18
let n
function twoSum(nums, k) {
    let indexes=[]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {  
            if (nums[i] + nums[j] === k) {
                indexes.push([i, j])
                
            }
        }
    }  
    return indexes
}
console.log(twoSum(nums, k))
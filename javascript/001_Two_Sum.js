/**
 * answer 1
 * O(n^2) answer
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]+ nums[j+1] === target){
                return [i, j+1]
            }
        }
    }
};

/**
 * answer 2
 * O(2n) answer
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = [];
    for(let i=0;i<nums.length;i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = [i]
        }
        else{
            dict[nums[i]].push(i)
        }
    }
    for (let i=0; i<nums.length; i++){
        if(dict[nums[i]] && dict[target - nums[i]]){
            if (nums[i] == (target - nums[i])){
                if (dict[target - nums[i]].length > 1){
                    return [dict[nums[i]].shift(), dict[target - nums[i]].shift()]
                } else {
                    continue
                }
            }
            return [dict[nums[i]].shift(), dict[target - nums[i]].shift()]
        } 
    }   
};

console.log(twoSum([3,2,4], 6))

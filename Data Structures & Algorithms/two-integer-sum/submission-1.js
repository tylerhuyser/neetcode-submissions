class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let dict = {}

        for (let i  = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            let difference = target - currentNum
            if (currentNum in dict) return [dict[currentNum], i] 
            dict[difference] = i
        }

        return false
    }

}

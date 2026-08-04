class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let dict = {}

        for (const [index, number] of nums.entries()) {
            console.log(number)
            if (number in dict) return [dict[number], index]
            else dict[target - number] = index
            console.log(dict)
        }

    }
}

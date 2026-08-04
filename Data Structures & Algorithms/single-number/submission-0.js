class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let dict = {}
        for (const num of nums) {
            dict[num] = (dict[num] || 0) + 1
        }

        console.log(dict)

        for (const key in dict) {
            if (dict[key] == 1) {
                return Number(key)
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dict = {}
        for (const num of nums) {
            if (dict[num] > 0) return true
            else dict[num] = (dict[num] || 0) + 1
        }
        return false
    }
}

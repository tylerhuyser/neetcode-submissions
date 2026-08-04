class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []

        function backtrack (start, current, total) {
            if (total === target) {
                result.push([...current])
                return
            }
            if (total > target ) return

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i])
                total += nums[i]
                backtrack(i, current, total)
                current.pop()
                total -= nums[i]
            }
        }


        backtrack(0, [], 0)
        return result
    }
}

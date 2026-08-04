class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        let max = []

        for (let i = 0; i < nums.length - k + 1; i++) {
            max[i] = Math.max(...nums.slice(i, i + k))
        }

        console.log(max)
        return max
    }
}

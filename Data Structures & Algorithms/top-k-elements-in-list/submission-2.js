class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let frequency = {}

        for (const num of nums) {
            frequency[num] = (frequency[num] || 0) + 1
        }

        return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]).slice(0, k).map(key => parseInt(key))
    }
}

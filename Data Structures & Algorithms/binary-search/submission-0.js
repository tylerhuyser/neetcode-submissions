class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        let start = 0
        let end = nums.length - 1
        let mid = Math.floor((start + end) / 2)

        while (start <= end) {
            let currentVal = nums[mid]
            if (currentVal === target) return mid
            else if (currentVal <= target) {
                start = mid + 1
                mid = Math.floor((start + end) / 2)
            } else if (currentVal > target) {
                end = mid - 1
                mid = Math.floor((start + end) / 2)
            }
        }

        return -1

    }
}

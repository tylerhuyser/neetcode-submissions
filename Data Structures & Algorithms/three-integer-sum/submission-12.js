class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = []
        let sorted = nums.sort((a, b) => a - b)

        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue
            let left = i + 1
            let right = sorted.length - 1

            while (left < right) {
                let currentVal = sorted[i]
                let leftVal = sorted[left]
                let rightVal = sorted[right]
                let combinedVal = currentVal + leftVal + rightVal

                if (combinedVal === 0) {
                    triplets.push([currentVal, leftVal, rightVal])
                    left++
                    right--
                    while (left < right && sorted[left] === sorted[left- 1]) left++
                    while (left < right && sorted[right] === sorted[right + 1]) right--
                }
                else if (combinedVal < 0) left++
                else right--
            }
        }

        return triplets
    }
}

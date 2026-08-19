class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = []
        let sorted = nums.sort((a,b) => a - b)

        for (let i = 0; i < sorted.length; i++) {
            let currentVal = sorted[i]
            if (i > 0 && sorted[i - 1] === currentVal) continue
            let left = i + 1
            let right = sorted.length - 1

            while (left < right) {
                let leftVal = sorted[left]
                let rightVal = sorted[right]
                let currentSum = currentVal + leftVal + rightVal

                if (currentSum === 0) {
                    triplets.push([currentVal, leftVal, rightVal])
                    left++
                    right--
                    while (left < right && sorted[left] === sorted[left - 1]) left++
                    while (left < right && sorted[right] === sorted[right + 1]) right--

                } else if (currentSum < 0 ) {
                    left++
                } else {
                    right--
                }
            }
        }

        return triplets
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => a - b)
        console.log(sorted)

        let triplets = []

        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            if (currentNum === nums[i - 1]) continue
            let left = i + 1
            let right = nums.length - 1
            while (left < right) {
                let leftVal = nums[left]
                let rightVal = nums[right]
                let currentSum = currentNum + leftVal + rightVal
                if (currentSum === 0) {
                    triplets.push([currentNum, leftVal, rightVal])
                    left++
                    right--
                    while (left < right && nums[left] === leftVal) left++
                    while (left < right && nums[right] === rightVal) right--
                } 
                else if (currentSum < 0) left++
                else if (currentSum > 0) right--

            }
        }

        return triplets
    }
}
